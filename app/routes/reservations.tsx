import { useState } from "react";
import type { Route } from "./+types/reservations";

export const meta: Route.MetaFunction = () => [
  { title: "Book a Table - Cantina Mariachi | Table Reservations in Casablanca" },
  { 
    name: "description", 
    content: "Reserve your table at Cantina Mariachi in Casablanca. Book online for lunch, dinner, or our special weekend Pollo a la Brasa. Easy online reservations!" 
  },
];

export default function Reservations() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    date: '',
    time: '',
    partySize: 2,
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (error) {
      console.error('Error making reservation:', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="font-fredoka font-bold text-3xl text-gray-900 mb-4">
            Reservation Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your table has been reserved successfully.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
            <p><strong>Name:</strong> {formData.customerName}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Party Size:</strong> {formData.partySize} people</p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            We'll see you at Cantina Mariachi! For any changes, call us at <strong>+212 5223-99178</strong>
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                customerName: '',
                customerEmail: '',
                customerPhone: '',
                date: '',
                time: '',
                partySize: 2,
                notes: ''
              });
            }}
            className="btn-primary"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fredoka font-bold text-5xl mb-4">Book Your Table</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Reserve your spot for an authentic Mexican dining experience in Casablanca
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-bold text-2xl mb-6">Make a Reservation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.customerEmail}
                  onChange={(e) => setFormData({...formData, customerEmail: e.target.value})}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.customerPhone}
                  onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                  className="form-input"
                  placeholder="+212 6XX-XXXXXX"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Time *</label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="form-select"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Party Size *</label>
                <select
                  required
                  value={formData.partySize}
                  onChange={(e) => setFormData({...formData, partySize: parseInt(e.target.value)})}
                  className="form-select"
                >
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map(size => (
                    <option key={size} value={size}>
                      {size} {size === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requests</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="form-textarea h-20"
                  placeholder="Birthday celebration, dietary restrictions, seating preferences, etc."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="spinner mr-2"></div>
                    Booking Table...
                  </div>
                ) : (
                  'Reserve Table'
                )}
              </button>
            </form>
          </div>

          {/* Restaurant Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-bold text-xl mb-4">Restaurant Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span>12:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday:</span>
                  <span>12:00 - 24:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 - 22:00</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-sm font-semibold text-yellow-800">
                  Weekend Special: Pollo a la Brasa available Friday-Sunday!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-bold text-xl mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">4 Rue Ahmed Charci</p>
                    <p className="text-gray-600">Vélodrome, Casablanca</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+212522399178" className="font-medium hover:text-red-600">
                    +212 5223-99178
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:info@cantinamariachi.ma" className="font-medium hover:text-red-600">
                    info@cantinamariachi.ma
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-bold text-xl mb-4">Reservation Policy</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Reservations can be made up to 30 days in advance</li>
                <li>• Please arrive within 15 minutes of your reservation time</li>
                <li>• For parties of 8 or more, please call us directly</li>
                <li>• Cancellations should be made at least 2 hours in advance</li>
                <li>• Weekend reservations are highly recommended</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}