import { useState, useEffect } from "react";
import type { Route } from "./+types/order";

export const meta: Route.MetaFunction = () => [
  { title: "Order Online - Cantina Mariachi | Mexican Food Delivery & Takeout" },
  { 
    name: "description", 
    content: "Order authentic Mexican food online from Cantina Mariachi in Casablanca. Fast delivery and takeout available. Order tacos, fajitas, nachos, and more!" 
  },
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

type OrderType = 'TAKEOUT' | 'DELIVERY';

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<OrderType>('TAKEOUT');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Mock menu items for ordering
  const menuItems = [
    { id: '1', name: 'Loaded Nachos', price: 85, category: 'Appetizers' },
    { id: '2', name: 'Guacamole & Chips', price: 55, category: 'Appetizers' },
    { id: '4', name: 'Carnitas Tacos', price: 45, category: 'Tacos' },
    { id: '5', name: 'Chicken Tinga Tacos', price: 42, category: 'Tacos' },
    { id: '7', name: 'Chicken Fajitas', price: 120, category: 'Fajitas' },
    { id: '8', name: 'Beef Fajitas', price: 135, category: 'Fajitas' },
    { id: '12', name: 'Pollo a la Brasa', price: 150, category: 'Weekend Special' }
  ];

  const addToCart = (item: typeof menuItems[0]) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.20; // 20% VAT in Morocco
  const deliveryFee = orderType === 'DELIVERY' ? 15 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockOrderNumber = `CM${Date.now()}`;
      setOrderNumber(mockOrderNumber);
      setOrderPlaced(true);
      setCart([]);
    } catch (error) {
      console.error('Error placing order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="font-fredoka font-bold text-3xl text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Your order has been placed successfully.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <p className="font-semibold">Order Number:</p>
            <p className="text-2xl font-bold text-red-600">{orderNumber}</p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            {orderType === 'DELIVERY' 
              ? 'We\'ll deliver your order within 30-45 minutes.'
              : 'Your order will be ready for pickup in 15-20 minutes.'
            }
          </p>
          <p className="text-sm text-gray-600 mb-6">
            For any questions, call us at <strong>+212 5223-99178</strong>
          </p>
          <button
            onClick={() => {
              setOrderPlaced(false);
              setCustomerInfo({
                name: '',
                email: '',
                phone: '',
                address: '',
                notes: ''
              });
            }}
            className="btn-primary"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-fredoka font-bold text-4xl mb-2">Order Online</h1>
          <p className="text-lg">
            📍 4 Rue Ahmed Charci, Vélodrome, Casablanca | 📞 +212 5223-99178
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-2xl mb-6">Menu Items</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menuItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <span className="font-bold text-red-600">{item.price} MAD</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart & Checkout */}
          <div className="space-y-6">
            {/* Order Type Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-xl mb-4">Order Type</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="TAKEOUT"
                    checked={orderType === 'TAKEOUT'}
                    onChange={(e) => setOrderType(e.target.value as OrderType)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">🥡 Takeout</div>
                    <div className="text-sm text-gray-600">Ready in 15-20 minutes</div>
                  </div>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="DELIVERY"
                    checked={orderType === 'DELIVERY'}
                    onChange={(e) => setOrderType(e.target.value as OrderType)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">🚚 Delivery</div>
                    <div className="text-sm text-gray-600">30-45 minutes (+15 MAD)</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Cart */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-xl mb-4">Your Order</h3>
              
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            {item.price} MAD × {item.quantity}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>{subtotal.toFixed(2)} MAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (20%):</span>
                      <span>{tax.toFixed(2)} MAD</span>
                    </div>
                    {orderType === 'DELIVERY' && (
                      <div className="flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>{deliveryFee} MAD</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span>{total.toFixed(2)} MAD</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Customer Information */}
            {cart.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl mb-4">Customer Information</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  
                  {orderType === 'DELIVERY' && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Delivery Address *</label>
                      <textarea
                        required
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        className="form-textarea h-20"
                        placeholder="Street address, building, apartment number..."
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Special Instructions</label>
                    <textarea
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      className="form-textarea h-16"
                      placeholder="Any special requests or notes..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="spinner mr-2"></div>
                        Placing Order...
                      </div>
                    ) : (
                      `Place Order - ${total.toFixed(2)} MAD`
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}