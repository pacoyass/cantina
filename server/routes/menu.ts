import express from 'express';
import { db } from '../db';

const router = express.Router();

// Get all menu categories with items
router.get('/', async (req, res) => {
  try {
    const categories = await db.category.findMany({
      include: {
        menuItems: {
          where: {
            isAvailable: true,
          },
          orderBy: {
            name: 'asc',
          },
        },
      },
      orderBy: {
        order: 'asc',
      },
    });

    res.json(categories);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
});

// Get menu items by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    
    const menuItems = await db.menuItem.findMany({
      where: {
        categoryId,
        isAvailable: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Get special items (weekend specials like Pollo a la Brasa)
router.get('/specials', async (req, res) => {
  try {
    const specialItems = await db.menuItem.findMany({
      where: {
        isSpecial: true,
        isAvailable: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    res.json(specialItems);
  } catch (error) {
    console.error('Error fetching special items:', error);
    res.status(500).json({ error: 'Failed to fetch special items' });
  }
});

// Get single menu item
router.get('/item/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const menuItem = await db.menuItem.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });

    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    res.json(menuItem);
  } catch (error) {
    console.error('Error fetching menu item:', error);
    res.status(500).json({ error: 'Failed to fetch menu item' });
  }
});

export default router;