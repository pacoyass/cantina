import express from 'express';
import { db } from '../db';
import { ReservationStatus } from '@prisma/client';

const router = express.Router();

// Create a new reservation
router.post('/', async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      date,
      time,
      partySize,
      notes,
    } = req.body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !date || !time || !partySize) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate party size
    if (partySize < 1 || partySize > 12) {
      return res.status(400).json({ error: 'Party size must be between 1 and 12' });
    }

    // Validate date (must be in the future)
    const reservationDate = new Date(date);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    if (reservationDate < now) {
      return res.status(400).json({ error: 'Reservation date must be in the future' });
    }

    // Check if the time slot is available (simple check - can be enhanced)
    const existingReservations = await db.reservation.count({
      where: {
        date: reservationDate,
        time,
        status: {
          in: [ReservationStatus.PENDING, ReservationStatus.CONFIRMED],
        },
      },
    });

    // Simple capacity check (assuming 10 tables max per time slot)
    if (existingReservations >= 10) {
      return res.status(400).json({ error: 'Time slot is fully booked' });
    }

    const reservation = await db.reservation.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        date: reservationDate,
        time,
        partySize,
        notes,
      },
    });

    res.status(201).json(reservation);
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ error: 'Failed to create reservation' });
  }
});

// Get reservation by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await db.reservation.findUnique({
      where: { id },
    });

    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.json(reservation);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    res.status(500).json({ error: 'Failed to fetch reservation' });
  }
});

// Update reservation status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!Object.values(ReservationStatus).includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const reservation = await db.reservation.update({
      where: { id },
      data: { status },
    });

    res.json(reservation);
  } catch (error) {
    console.error('Error updating reservation status:', error);
    res.status(500).json({ error: 'Failed to update reservation status' });
  }
});

// Get available time slots for a date
router.get('/availability/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const reservationDate = new Date(date);

    // Define available time slots
    const timeSlots = [
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
      '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
    ];

    // Get existing reservations for the date
    const existingReservations = await db.reservation.groupBy({
      by: ['time'],
      where: {
        date: reservationDate,
        status: {
          in: [ReservationStatus.PENDING, ReservationStatus.CONFIRMED],
        },
      },
      _count: {
        id: true,
      },
    });

    // Create availability map
    const availability = timeSlots.map(time => {
      const existing = existingReservations.find(r => r.time === time);
      const reservationCount = existing ? existing._count.id : 0;
      
      return {
        time,
        available: reservationCount < 10, // Max 10 reservations per slot
        remaining: Math.max(0, 10 - reservationCount),
      };
    });

    res.json(availability);
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ error: 'Failed to fetch availability' });
  }
});

export default router;