import express from 'express';
import { db } from '../db';
import { OrderType, OrderStatus } from '@prisma/client';

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      type,
      items,
      notes,
    } = req.body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !type || !items || items.length === 0) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate order number
    const orderNumber = `CM${Date.now()}`;

    // Calculate totals
    let subtotal = 0;
    for (const item of items) {
      const menuItem = await db.menuItem.findUnique({
        where: { id: item.menuItemId },
      });
      if (!menuItem) {
        return res.status(400).json({ error: `Menu item ${item.menuItemId} not found` });
      }
      subtotal += Number(menuItem.price) * item.quantity;
    }

    const tax = subtotal * 0.20; // 20% VAT in Morocco
    const total = subtotal + tax;

    // Create order with items
    const order = await db.order.create({
      data: {
        orderNumber,
        customerName,
        customerEmail,
        customerPhone,
        type: type as OrderType,
        subtotal,
        tax,
        total,
        notes,
        orderItems: {
          create: items.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: item.price,
            notes: item.notes,
          })),
        },
      },
      include: {
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get order by order number
router.get('/:orderNumber', async (req, res) => {
  try {
    const { orderNumber } = req.params;

    const order = await db.order.findUnique({
      where: { orderNumber },
      include: {
        orderItems: {
          include: {
            menuItem: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// Get order status
router.get('/:orderNumber/status', async (req, res) => {
  try {
    const { orderNumber } = req.params;

    const order = await db.order.findUnique({
      where: { orderNumber },
      select: {
        id: true,
        orderNumber: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error fetching order status:', error);
    res.status(500).json({ error: 'Failed to fetch order status' });
  }
});

// Update order status (for restaurant staff)
router.patch('/:orderNumber/status', async (req, res) => {
  try {
    const { orderNumber } = req.params;
    const { status } = req.body;

    if (!Object.values(OrderStatus).includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const order = await db.order.update({
      where: { orderNumber },
      data: { status },
      include: {
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
    });

    res.json(order);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Failed to update order status' });
  }
});

export default router;