import express from 'express';
import { db } from '../db';
import nodemailer from 'nodemailer';

const router = express.Router();

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email, name } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if email already exists
    const existingSubscription = await db.newsletter.findUnique({
      where: { email },
    });

    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return res.status(400).json({ error: 'Email is already subscribed' });
      } else {
        // Reactivate subscription
        const subscription = await db.newsletter.update({
          where: { email },
          data: { isActive: true, name },
        });

        // Send welcome email
        try {
          const transporter = createTransporter();
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome back to Cantina Mariachi Newsletter!',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #d32f2f;">Welcome back to Cantina Mariachi!</h2>
                <p>Hello ${name || 'there'},</p>
                <p>We're excited to have you back on our newsletter list!</p>
                <p>You'll receive updates about:</p>
                <ul>
                  <li>🌮 New menu items and specials</li>
                  <li>🎉 Special events and promotions</li>
                  <li>📅 Weekend Pollo a la Brasa specials</li>
                  <li>🎊 Exclusive offers for newsletter subscribers</li>
                </ul>
                <p>Visit us at:</p>
                <p>📍 ${process.env.RESTAURANT_ADDRESS}</p>
                <p>📞 ${process.env.RESTAURANT_PHONE}</p>
                <hr>
                <p><small>If you wish to unsubscribe, please reply to this email with "UNSUBSCRIBE".</small></p>
              </div>
            `,
          });
        } catch (emailError) {
          console.error('Error sending welcome email:', emailError);
        }

        return res.status(200).json({
          message: 'Successfully resubscribed to newsletter',
          subscription,
        });
      }
    }

    // Create new subscription
    const subscription = await db.newsletter.create({
      data: {
        email,
        name,
      },
    });

    // Send welcome email
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Cantina Mariachi Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d32f2f;">¡Bienvenido to Cantina Mariachi!</h2>
            <p>Hello ${name || 'there'},</p>
            <p>Thank you for subscribing to our newsletter!</p>
            <p>You'll receive updates about:</p>
            <ul>
              <li>🌮 New menu items and specials</li>
              <li>🎉 Special events and promotions</li>
              <li>📅 Weekend Pollo a la Brasa specials</li>
              <li>🎊 Exclusive offers for newsletter subscribers</li>
            </ul>
            <p>Visit us at:</p>
            <p>📍 ${process.env.RESTAURANT_ADDRESS}</p>
            <p>📞 ${process.env.RESTAURANT_PHONE}</p>
            <hr>
            <p><small>If you wish to unsubscribe, please reply to this email with "UNSUBSCRIBE".</small></p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError);
    }

    res.status(201).json({
      message: 'Successfully subscribed to newsletter',
      subscription,
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const subscription = await db.newsletter.update({
      where: { email },
      data: { isActive: false },
    });

    res.json({
      message: 'Successfully unsubscribed from newsletter',
      subscription,
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Email not found in newsletter list' });
    }
    console.error('Error unsubscribing from newsletter:', error);
    res.status(500).json({ error: 'Failed to unsubscribe from newsletter' });
  }
});

// Get newsletter subscribers (for admin)
router.get('/subscribers', async (req, res) => {
  try {
    const { page = 1, limit = 50, active } = req.query;
    
    const where = active === 'true' ? { isActive: true } : 
                  active === 'false' ? { isActive: false } : {};
    
    const subscribers = await db.newsletter.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
    });

    const total = await db.newsletter.count({ where });

    res.json({
      subscribers,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    res.status(500).json({ error: 'Failed to fetch newsletter subscribers' });
  }
});

// Send newsletter to all active subscribers (for admin)
router.post('/send', async (req, res) => {
  try {
    const { subject, content } = req.body;

    if (!subject || !content) {
      return res.status(400).json({ error: 'Subject and content are required' });
    }

    // Get all active subscribers
    const subscribers = await db.newsletter.findMany({
      where: { isActive: true },
    });

    if (subscribers.length === 0) {
      return res.status(400).json({ error: 'No active subscribers found' });
    }

    const transporter = createTransporter();
    let sentCount = 0;
    let errorCount = 0;

    // Send emails in batches to avoid overwhelming the SMTP server
    const batchSize = 10;
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      
      await Promise.all(
        batch.map(async (subscriber) => {
          try {
            await transporter.sendMail({
              from: process.env.EMAIL_USER,
              to: subscriber.email,
              subject,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #d32f2f;">Cantina Mariachi Newsletter</h2>
                  ${content}
                  <hr>
                  <p>📍 ${process.env.RESTAURANT_ADDRESS}</p>
                  <p>📞 ${process.env.RESTAURANT_PHONE}</p>
                  <p><small>If you wish to unsubscribe, please reply to this email with "UNSUBSCRIBE".</small></p>
                </div>
              `,
            });
            sentCount++;
          } catch (emailError) {
            console.error(`Error sending email to ${subscriber.email}:`, emailError);
            errorCount++;
          }
        })
      );

      // Add a small delay between batches
      if (i + batchSize < subscribers.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    res.json({
      message: 'Newsletter sent',
      totalSubscribers: subscribers.length,
      sentCount,
      errorCount,
    });
  } catch (error) {
    console.error('Error sending newsletter:', error);
    res.status(500).json({ error: 'Failed to send newsletter' });
  }
});

export default router;