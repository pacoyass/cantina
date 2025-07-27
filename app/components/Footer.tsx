import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🌮</div>
              <span className="font-fredoka font-bold text-xl text-red-500">
                Cantina Mariachi
              </span>
            </div>
            <p className="text-gray-300">
              Authentic Mexican flavors in the heart of Casablanca. Experience the vibrant taste of Mexico!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/cantinamariachi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/cantinamariachi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.878-.807-1.297-1.958-1.297-3.326 0-1.297.49-2.448 1.297-3.326.807-.878 1.958-1.297 3.326-1.297 1.297 0 2.448.49 3.326 1.297.878.807 1.297 1.958 1.297 3.326 0 1.297-.49 2.448-1.297 3.326-.807.878-1.958 1.297-3.326 1.297z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-red-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-red-500 transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-red-500 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300">4 Rue Ahmed Charci</p>
                  <p className="text-gray-300">Vélodrome, Casablanca</p>
                  <p className="text-gray-300">Morocco</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+212522399178" 
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  +212 5223-99178
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:info@cantinamariachi.ma" 
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  info@cantinamariachi.ma
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>12:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>12:00 - 24:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 - 22:00</span>
              </div>
              <div className="mt-3 p-2 bg-yellow-600 rounded text-sm">
                <strong>Weekend Special:</strong><br />
                Pollo a la Brasa available!
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special offers and new menu items!
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cantina Mariachi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}