import { Link } from "react-router";
import type { Route } from "./+types/about";

export const meta: Route.MetaFunction = () => [
  { title: "About Us - Cantina Mariachi | Authentic Mexican Restaurant Story" },
  { 
    name: "description", 
    content: "Learn about Cantina Mariachi's story, our commitment to authentic Mexican cuisine, and our vibrant atmosphere in Casablanca. Discover our passion for Mexican culture and food." 
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-mexican-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fredoka font-bold text-5xl mb-6">About Cantina Mariachi</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bringing the authentic flavors and vibrant spirit of Mexico to the heart of Casablanca since our opening
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cantina Mariachi was born from a passion for authentic Mexican cuisine and a desire to share 
                the rich culinary traditions of Mexico with the vibrant city of Casablanca. Our founders, 
                inspired by their travels through Mexico and their love for its diverse regional flavors, 
                decided to create a restaurant that would transport diners straight to the heart of Mexico.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Located in the bustling Vélodrome district at 4 Rue Ahmed Charci, we've become a beloved 
                destination for both locals and tourists seeking genuine Mexican flavors. From our handmade 
                tortillas to our carefully sourced spices, every detail reflects our commitment to authenticity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a dream has evolved into Casablanca's premier Mexican dining destination, 
                where traditional recipes meet modern culinary techniques in a festive, welcoming atmosphere.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg p-8 text-white text-center">
                <div className="text-8xl mb-6">🇲🇽</div>
                <h3 className="font-bold text-2xl mb-4">Authentic Mexican Heritage</h3>
                <p className="text-lg">
                  Every recipe tells a story, every dish carries tradition, and every meal creates memories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To provide an authentic Mexican dining experience that celebrates the rich culinary heritage 
              of Mexico while creating a warm, festive atmosphere for our community in Casablanca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🌶️</div>
              <h3 className="font-bold text-xl mb-4">Authentic Flavors</h3>
              <p className="text-gray-600">
                We use traditional recipes passed down through generations, with ingredients sourced 
                to maintain the authentic taste of Mexico.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-bold text-xl mb-4">Vibrant Atmosphere</h3>
              <p className="text-gray-600">
                Our colorful décor, lively music, and warm hospitality create the perfect setting 
                for celebrations and memorable dining experiences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-xl mb-4">Community Focus</h3>
              <p className="text-gray-600">
                We're proud to be part of the Casablanca community, bringing people together 
                through the universal language of great food.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-8 text-center">
              What Makes Us Special
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bold text-2xl text-red-600 mb-4">🌮 Authentic Recipes</h3>
                <p className="text-gray-700 mb-6">
                  Our menu features traditional Mexican dishes from various regions, including Yucatecan, 
                  Oaxacan, and central Mexican specialties. Each recipe has been carefully adapted to 
                  maintain its authentic character while using the finest available ingredients.
                </p>

                <h3 className="font-bold text-2xl text-red-600 mb-4">🍗 Weekend Pollo a la Brasa</h3>
                <p className="text-gray-700 mb-6">
                  Our signature weekend special combines Mexican hospitality with Peruvian culinary 
                  tradition. This rotisserie chicken, marinated in a secret blend of spices and 
                  served with traditional accompaniments, has become a customer favorite.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-2xl text-red-600 mb-4">🌱 Fresh Ingredients</h3>
                <p className="text-gray-700 mb-6">
                  We prepare our guacamole fresh daily, make our salsas from scratch, and ensure 
                  that every ingredient meets our high standards for quality and freshness. Our 
                  commitment to quality is evident in every bite.
                </p>

                <h3 className="font-bold text-2xl text-red-600 mb-4">🎭 Cultural Experience</h3>
                <p className="text-gray-700">
                  Beyond just food, we offer a complete cultural experience with carefully curated 
                  Mexican music, traditional decorations, and an atmosphere that celebrates the 
                  joy and warmth of Mexican hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-20">
          <div className="bg-yellow-50 rounded-lg p-12">
            <div className="text-center mb-8">
              <h2 className="font-fredoka font-bold text-4xl text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-lg text-gray-600">
                We're dedicated to providing exceptional service and maintaining the highest standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="font-semibold mb-2">Quality Ingredients</h4>
                <p className="text-sm text-gray-600">Fresh, high-quality ingredients in every dish</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🌿</div>
                <h4 className="font-semibold mb-2">Dietary Options</h4>
                <p className="text-sm text-gray-600">Vegetarian and vegan options clearly marked</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-semibold mb-2">Excellent Service</h4>
                <p className="text-sm text-gray-600">Friendly, attentive staff dedicated to your experience</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h4 className="font-semibold mb-2">Customer Satisfaction</h4>
                <p className="text-sm text-gray-600">Highly rated on TripAdvisor and loved by locals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-mexican-gradient text-white rounded-lg p-12">
            <h2 className="font-fredoka font-bold text-4xl mb-6">Experience Cantina Mariachi</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable Mexican dining experience in the heart of Casablanca. 
              Whether it's a casual lunch, romantic dinner, or special celebration, we're here to serve you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                📅 Book Your Table
              </Link>
              <Link
                to="/order"
                className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🛍️ Order Online
              </Link>
            </div>

            <div className="mt-8 text-lg">
              <p>📍 4 Rue Ahmed Charci, Vélodrome, Casablanca</p>
              <p>📞 +212 5223-99178</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}