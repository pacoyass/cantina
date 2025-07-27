import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/menu";

export const meta: Route.MetaFunction = () => [
  { title: "Menu - Cantina Mariachi | Authentic Mexican Food in Casablanca" },
  { 
    name: "description", 
    content: "Explore our authentic Mexican menu featuring tacos, fajitas, nachos, burritos, and our famous weekend Pollo a la Brasa. Vegetarian and vegan options available." 
  },
];

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isSpecial: boolean;
  spiceLevel?: number;
}

interface Category {
  id: string;
  name: string;
  description?: string;
  menuItems: MenuItem[];
}

export default function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mock data - in real app, this would come from the API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCategories([
        {
          id: 'appetizers',
          name: 'Appetizers',
          description: 'Start your Mexican feast with these delicious starters',
          menuItems: [
            {
              id: '1',
              name: 'Loaded Nachos',
              description: 'Crispy tortilla chips topped with melted cheese, jalapeños, sour cream, guacamole, and your choice of meat',
              price: 85,
              isVegetarian: true,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 2
            },
            {
              id: '2',
              name: 'Guacamole & Chips',
              description: 'Fresh avocado dip made daily with tomatoes, onions, cilantro, and lime, served with warm tortilla chips',
              price: 55,
              isVegetarian: true,
              isVegan: true,
              isSpecial: false,
              spiceLevel: 1
            },
            {
              id: '3',
              name: 'Jalapeño Poppers',
              description: 'Fresh jalapeños stuffed with cream cheese, breaded and fried to golden perfection',
              price: 65,
              isVegetarian: true,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 3
            }
          ]
        },
        {
          id: 'tacos',
          name: 'Tacos',
          description: 'Authentic street-style tacos on corn tortillas',
          menuItems: [
            {
              id: '4',
              name: 'Carnitas Tacos',
              description: 'Slow-cooked pork shoulder with onions, cilantro, and salsa verde on soft corn tortillas',
              price: 45,
              isVegetarian: false,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 2
            },
            {
              id: '5',
              name: 'Chicken Tinga Tacos',
              description: 'Shredded chicken in chipotle sauce with lettuce, tomato, and Mexican crema',
              price: 42,
              isVegetarian: false,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 3
            },
            {
              id: '6',
              name: 'Vegetarian Black Bean Tacos',
              description: 'Seasoned black beans with avocado, lettuce, tomato, and vegan cheese',
              price: 38,
              isVegetarian: true,
              isVegan: true,
              isSpecial: false,
              spiceLevel: 1
            }
          ]
        },
        {
          id: 'fajitas',
          name: 'Fajitas',
          description: 'Sizzling hot plates served with tortillas and fixings',
          menuItems: [
            {
              id: '7',
              name: 'Chicken Fajitas',
              description: 'Grilled chicken breast with bell peppers and onions, served with warm tortillas, guacamole, sour cream, and salsa',
              price: 120,
              isVegetarian: false,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 2
            },
            {
              id: '8',
              name: 'Beef Fajitas',
              description: 'Tender beef strips with bell peppers and onions, served with warm tortillas and all the fixings',
              price: 135,
              isVegetarian: false,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 2
            },
            {
              id: '9',
              name: 'Vegetable Fajitas',
              description: 'Grilled bell peppers, onions, zucchini, and mushrooms served with vegan-friendly accompaniments',
              price: 95,
              isVegetarian: true,
              isVegan: true,
              isSpecial: false,
              spiceLevel: 1
            }
          ]
        },
        {
          id: 'burritos',
          name: 'Burritos',
          description: 'Large flour tortillas stuffed with your favorites',
          menuItems: [
            {
              id: '10',
              name: 'California Burrito',
              description: 'Carne asada, french fries, cheese, guacamole, and sour cream wrapped in a large flour tortilla',
              price: 95,
              isVegetarian: false,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 2
            },
            {
              id: '11',
              name: 'Bean & Rice Burrito',
              description: 'Refried beans, Spanish rice, cheese, lettuce, and salsa in a warm flour tortilla',
              price: 65,
              isVegetarian: true,
              isVegan: false,
              isSpecial: false,
              spiceLevel: 1
            }
          ]
        },
        {
          id: 'specials',
          name: 'Weekend Specials',
          description: 'Available Friday through Sunday',
          menuItems: [
            {
              id: '12',
              name: 'Pollo a la Brasa',
              description: 'Peruvian-style rotisserie chicken marinated in special spices, served with fried yuca and aji verde sauce',
              price: 150,
              isVegetarian: false,
              isVegan: false,
              isSpecial: true,
              spiceLevel: 2
            }
          ]
        },
        {
          id: 'desserts',
          name: 'Desserts',
          description: 'Sweet endings to your Mexican meal',
          menuItems: [
            {
              id: '13',
              name: 'Churros',
              description: 'Crispy fried dough sticks rolled in cinnamon sugar, served with chocolate dipping sauce',
              price: 35,
              isVegetarian: true,
              isVegan: false,
              isSpecial: false
            },
            {
              id: '14',
              name: 'Flan',
              description: 'Traditional Mexican caramel custard dessert',
              price: 40,
              isVegetarian: true,
              isVegan: false,
              isSpecial: false
            }
          ]
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  const getSpiceIndicator = (level?: number) => {
    if (!level) return '';
    return '🌶️'.repeat(level);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-mexican-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fredoka font-bold text-5xl mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Authentic Mexican flavors made with fresh ingredients and traditional recipes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-red-50'
              }`}
            >
              All Items
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Categories */}
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-2">
                {category.name}
              </h2>
              {category.description && (
                <p className="text-lg text-gray-600">{category.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.menuItems.map((item) => (
                <div key={item.id} className="menu-card bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center relative">
                    <span className="text-6xl">🍽️</span>
                    {item.isSpecial && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                        SPECIAL
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl">{item.name}</h3>
                      <div className="flex items-center gap-1">
                        {item.isVegan && (
                          <span className="dietary-badge vegan-badge">Vegan</span>
                        )}
                        {item.isVegetarian && !item.isVegan && (
                          <span className="dietary-badge vegetarian-badge">Vegetarian</span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-red-600">
                        {item.price} MAD
                      </span>
                      <div className="flex items-center gap-2">
                        {item.spiceLevel && (
                          <span className="text-sm">
                            {getSpiceIndicator(item.spiceLevel)}
                          </span>
                        )}
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                          Add to Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="font-fredoka font-bold text-3xl text-gray-900 mb-4">
            Ready to Order?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Choose from takeout, delivery, or dine-in for the full experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              🛍️ Order Online
            </Link>
            <Link
              to="/reservations"
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              📅 Book a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}