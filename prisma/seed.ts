import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories first
  const appetizers = await prisma.category.create({
    data: {
      name: 'Appetizers',
      description: 'Start your Mexican feast with these delicious starters',
      order: 1,
    },
  });

  const tacos = await prisma.category.create({
    data: {
      name: 'Tacos',
      description: 'Authentic street-style tacos on corn tortillas',
      order: 2,
    },
  });

  const fajitas = await prisma.category.create({
    data: {
      name: 'Fajitas',
      description: 'Sizzling hot plates served with tortillas and fixings',
      order: 3,
    },
  });

  const burritos = await prisma.category.create({
    data: {
      name: 'Burritos',
      description: 'Large flour tortillas stuffed with your favorites',
      order: 4,
    },
  });

  const flautas = await prisma.category.create({
    data: {
      name: 'Flautas',
      description: 'Crispy rolled tortillas filled with savory ingredients',
      order: 5,
    },
  });

  const chili = await prisma.category.create({
    data: {
      name: 'Chili con Carne',
      description: 'Hearty stews and chili dishes',
      order: 6,
    },
  });

  const specials = await prisma.category.create({
    data: {
      name: 'Weekend Specials',
      description: 'Available Friday through Sunday',
      order: 7,
    },
  });

  const desserts = await prisma.category.create({
    data: {
      name: 'Desserts',
      description: 'Sweet endings to your Mexican meal',
      order: 8,
    },
  });

  const beverages = await prisma.category.create({
    data: {
      name: 'Beverages',
      description: 'Refreshing drinks to complement your meal',
      order: 9,
    },
  });

  // Create menu items
  const menuItems = [
    // Appetizers
    {
      name: 'Loaded Nachos',
      description: 'Crispy tortilla chips topped with melted cheese, jalapeños, sour cream, guacamole, and your choice of meat',
      price: 85,
      categoryId: appetizers.id,
      isVegetarian: true,
      isVegan: false,
    },
    {
      name: 'Guacamole & Chips',
      description: 'Fresh avocado dip made daily with tomatoes, onions, cilantro, and lime, served with warm tortilla chips',
      price: 55,
      categoryId: appetizers.id,
      isVegetarian: true,
      isVegan: true,
    },
    {
      name: 'Jalapeño Poppers',
      description: 'Fresh jalapeños stuffed with cream cheese, breaded and fried to golden perfection',
      price: 65,
      categoryId: appetizers.id,
      isVegetarian: true,
      isVegan: false,
    },
    {
      name: 'Quesadilla Suprema',
      description: 'Large flour tortilla filled with cheese, peppers, onions, and your choice of chicken or beef',
      price: 75,
      categoryId: appetizers.id,
      isVegetarian: false,
      isVegan: false,
    },

    // Tacos
    {
      name: 'Carnitas Tacos',
      description: 'Slow-cooked pork shoulder with onions, cilantro, and salsa verde on soft corn tortillas (3 pieces)',
      price: 45,
      categoryId: tacos.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Chicken Tinga Tacos',
      description: 'Shredded chicken in chipotle sauce with lettuce, tomato, and Mexican crema (3 pieces)',
      price: 42,
      categoryId: tacos.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Carne Asada Tacos',
      description: 'Grilled beef with onions, cilantro, and lime on corn tortillas (3 pieces)',
      price: 48,
      categoryId: tacos.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Fish Tacos',
      description: 'Battered and fried fish with cabbage slaw and chipotle mayo (3 pieces)',
      price: 52,
      categoryId: tacos.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Vegetarian Black Bean Tacos',
      description: 'Seasoned black beans with avocado, lettuce, tomato, and vegan cheese (3 pieces)',
      price: 38,
      categoryId: tacos.id,
      isVegetarian: true,
      isVegan: true,
    },

    // Fajitas
    {
      name: 'Chicken Fajitas',
      description: 'Grilled chicken breast with bell peppers and onions, served with warm tortillas, guacamole, sour cream, and salsa',
      price: 120,
      categoryId: fajitas.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Beef Fajitas',
      description: 'Tender beef strips with bell peppers and onions, served with warm tortillas and all the fixings',
      price: 135,
      categoryId: fajitas.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Shrimp Fajitas',
      description: 'Grilled shrimp with peppers and onions, served with tortillas and accompaniments',
      price: 145,
      categoryId: fajitas.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Mixed Fajitas',
      description: 'Combination of chicken, beef, and shrimp with peppers and onions',
      price: 165,
      categoryId: fajitas.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Vegetable Fajitas',
      description: 'Grilled bell peppers, onions, zucchini, and mushrooms served with vegan-friendly accompaniments',
      price: 95,
      categoryId: fajitas.id,
      isVegetarian: true,
      isVegan: true,
    },

    // Burritos
    {
      name: 'California Burrito',
      description: 'Carne asada, french fries, cheese, guacamole, and sour cream wrapped in a large flour tortilla',
      price: 95,
      categoryId: burritos.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Chicken Burrito',
      description: 'Grilled chicken, rice, beans, cheese, lettuce, and salsa in a flour tortilla',
      price: 85,
      categoryId: burritos.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Bean & Rice Burrito',
      description: 'Refried beans, Spanish rice, cheese, lettuce, and salsa in a warm flour tortilla',
      price: 65,
      categoryId: burritos.id,
      isVegetarian: true,
      isVegan: false,
    },
    {
      name: 'Veggie Burrito',
      description: 'Black beans, rice, grilled vegetables, avocado, and vegan cheese',
      price: 72,
      categoryId: burritos.id,
      isVegetarian: true,
      isVegan: true,
    },

    // Flautas
    {
      name: 'Chicken Flautas',
      description: 'Crispy rolled tortillas filled with seasoned chicken, served with guacamole and sour cream (4 pieces)',
      price: 68,
      categoryId: flautas.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Beef Flautas',
      description: 'Crispy rolled tortillas filled with seasoned beef, served with salsa and Mexican crema (4 pieces)',
      price: 72,
      categoryId: flautas.id,
      isVegetarian: false,
      isVegan: false,
    },

    // Chili con Carne
    {
      name: 'Traditional Chili con Carne',
      description: 'Hearty beef chili with beans, served with cornbread and cheese',
      price: 78,
      categoryId: chili.id,
      isVegetarian: false,
      isVegan: false,
    },
    {
      name: 'Vegetarian Chili',
      description: 'Three-bean chili with vegetables and spices, served with cornbread',
      price: 65,
      categoryId: chili.id,
      isVegetarian: true,
      isVegan: true,
    },

    // Weekend Specials
    {
      name: 'Pollo a la Brasa',
      description: 'Peruvian-style rotisserie chicken marinated in special spices, served with fried yuca and aji verde sauce',
      price: 150,
      categoryId: specials.id,
      isVegetarian: false,
      isVegan: false,
      isSpecial: true,
    },

    // Desserts
    {
      name: 'Churros',
      description: 'Crispy fried dough sticks rolled in cinnamon sugar, served with chocolate dipping sauce (6 pieces)',
      price: 35,
      categoryId: desserts.id,
      isVegetarian: true,
      isVegan: false,
    },
    {
      name: 'Flan',
      description: 'Traditional Mexican caramel custard dessert',
      price: 40,
      categoryId: desserts.id,
      isVegetarian: true,
      isVegan: false,
    },
    {
      name: 'Tres Leches Cake',
      description: 'Sponge cake soaked in three kinds of milk with cinnamon',
      price: 45,
      categoryId: desserts.id,
      isVegetarian: true,
      isVegan: false,
    },

    // Beverages
    {
      name: 'Fresh Lime Agua Fresca',
      description: 'Refreshing lime-flavored water with mint',
      price: 25,
      categoryId: beverages.id,
      isVegetarian: true,
      isVegan: true,
    },
    {
      name: 'Horchata',
      description: 'Traditional rice and cinnamon drink',
      price: 28,
      categoryId: beverages.id,
      isVegetarian: true,
      isVegan: false,
    },
    {
      name: 'Mexican Coca-Cola',
      description: 'Authentic Mexican Coke made with cane sugar',
      price: 20,
      categoryId: beverages.id,
      isVegetarian: true,
      isVegan: true,
    },
    {
      name: 'Jarritos (Various Flavors)',
      description: 'Traditional Mexican sodas - Lime, Orange, Pineapple, or Tamarind',
      price: 22,
      categoryId: beverages.id,
      isVegetarian: true,
      isVegan: true,
    },
  ];

  // Create all menu items
  for (const item of menuItems) {
    await prisma.menuItem.create({
      data: item,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });