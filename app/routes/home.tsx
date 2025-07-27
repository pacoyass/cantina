import { Link } from "react-router";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [
  { title: "Cantina Mariachi - Authentic Mexican Restaurant in Casablanca" },
  { 
    name: "description", 
    content: "Experience authentic Mexican cuisine at Cantina Mariachi in Casablanca. Fresh tacos, fajitas, nachos, and our famous weekend Pollo a la Brasa. Order online or book a table!" 
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Special Offer Banner */}
      <div className="special-offer">
        <div className="max-w-7xl mx-auto px-4">
          🎉 Weekend Special: Pollo a la Brasa Available! Call +212 5223-99178 to Reserve 🎉
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-mexican-pattern opacity-10"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-bounce-slow text-6xl mb-6">🌮</div>
          <h1 className="font-fredoka font-bold text-5xl md:text-7xl mb-6 fiesta-decoration">
            ¡Authentic Mexican Flavors in Casablanca!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the vibrant taste of Mexico with fresh ingredients, traditional recipes, 
            and a festive atmosphere that will transport you south of the border.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/order"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              🛍️ Order Online
            </Link>
            <Link
              to="/reservations"
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📅 Book a Table
            </Link>
          </div>
          
          {/* Quick Info */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>4 Rue Ahmed Charci, Vélodrome</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+212 5223-99178</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-4">
              Our Most Popular Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the authentic flavors that have made us Casablanca's favorite Mexican restaurant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fajitas */}
            <div className="menu-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">🌶️</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Sizzling Fajitas</h3>
                <p className="text-gray-600 mb-4">
                  Tender chicken or beef with peppers, onions, and our secret spice blend
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">120 MAD</span>
                  <span className="spicy-indicator">🌶️🌶️</span>
                </div>
              </div>
            </div>

            {/* Tacos */}
            <div className="menu-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">🌮</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Street Tacos</h3>
                <p className="text-gray-600 mb-4">
                  Authentic corn tortillas with your choice of meat, onions, and cilantro
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">45 MAD</span>
                  <div className="flex gap-1">
                    <span className="dietary-badge vegetarian-badge">V</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nachos */}
            <div className="menu-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-300 to-red-500 flex items-center justify-center">
                <span className="text-6xl">🧀</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Loaded Nachos</h3>
                <p className="text-gray-600 mb-4">
                  Crispy tortilla chips with cheese, jalapeños, sour cream, and guacamole
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">85 MAD</span>
                  <div className="flex gap-1">
                    <span className="dietary-badge vegetarian-badge">V</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pollo a la Brasa */}
            <div className="menu-card bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yellow-400">
              <div className="bg-yellow-400 text-center py-2">
                <span className="font-bold text-sm">WEEKEND SPECIAL</span>
              </div>
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-6xl">🍗</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Pollo a la Brasa</h3>
                <p className="text-gray-600 mb-4">
                  Weekend special: Rotisserie chicken with Peruvian spices and sides
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">150 MAD</span>
                  <span className="text-yellow-600 font-bold">⭐ SPECIAL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="btn-outline inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-6">
                Welcome to Cantina Mariachi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since opening our doors in Casablanca, we've been committed to bringing you 
                the most authentic Mexican dining experience in Morocco. Our vibrant atmosphere, 
                traditional recipes, and fresh ingredients create the perfect setting for any occasion.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From our sizzling fajitas to our weekend Pollo a la Brasa special, every dish 
                is prepared with love and authentic Mexican techniques passed down through generations.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg p-8 text-white text-center">
                <div className="text-8xl mb-4">🎭</div>
                <h3 className="font-bold text-2xl mb-4">Vibrant Atmosphere</h3>
                <p className="text-lg">
                  Experience the festive energy of Mexico with colorful décor, 
                  lively music, and warm hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Rated highly on TripAdvisor and loved by locals and tourists alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The best Mexican food in Casablanca! The fajitas are incredible and the 
                atmosphere is so authentic. Highly recommended!"
              </p>
              <div className="font-semibold">- Sarah M., TripAdvisor</div>
            </div>

            <div className="testimonial-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Amazing weekend special! The Pollo a la Brasa is perfectly seasoned and 
                the service is excellent. Will definitely come back!"
              </p>
              <div className="font-semibold">- Ahmed K., Local Customer</div>
            </div>

            <div className="testimonial-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Fresh ingredients, authentic flavors, and great value for money. 
                The nachos are a must-try!"
              </p>
              <div className="font-semibold">- Maria L., Tourist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mexican-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fredoka font-bold text-4xl mb-6">
            Ready for an Authentic Mexican Experience?
          </h2>
          <p className="text-xl mb-8">
            Join us for lunch, dinner, or our special weekend Pollo a la Brasa. 
            Order online for takeout and delivery, or book a table for the full experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/order"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              🛍️ Order for Delivery
            </Link>
            <Link
              to="/reservations"
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📅 Reserve Your Table
            </Link>
          </div>

          <div className="mt-8 text-lg">
            <p>📍 4 Rue Ahmed Charci, Vélodrome, Casablanca</p>
            <p>📞 +212 5223-99178</p>
          </div>
        </div>
      </section>
    </div>
  );
}
