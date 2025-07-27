# Cantina Mariachi - Mexican Restaurant Website

A modern, responsive website for Cantina Mariachi, an authentic Mexican restaurant located in Casablanca, Morocco. Built with React Router, Node.js, Prisma, and PostgreSQL.

## 🌮 Features

### Frontend
- **Modern React Router Setup**: Using the latest React Router v7 with custom server
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Mexican-Themed UI**: Vibrant colors, custom fonts (Fredoka), and festive styling
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML

### Core Pages
- **Home**: Hero section, featured dishes, testimonials, and prominent CTAs
- **Menu**: Organized categories, dietary badges, spice indicators, and filtering
- **Order Online**: Shopping cart, order types (takeout/delivery), customer forms
- **Reservations**: Table booking system with time slot availability
- **About Us**: Restaurant story, mission, and cultural experience
- **Contact**: Contact form, location info, hours, and map integration

### Backend Features
- **Express.js Server**: Custom server with API routes
- **PostgreSQL Database**: Robust data storage with Prisma ORM
- **Order Management**: Complete order processing and tracking
- **Reservation System**: Table booking with availability checking
- **Contact Forms**: Message handling with email notifications
- **Newsletter**: Subscription management system

### Technical Features
- **TypeScript**: Full type safety across frontend and backend
- **Prisma ORM**: Type-safe database operations
- **Email Integration**: Nodemailer for notifications
- **Security**: Helmet.js, CORS, input validation
- **Modern CSS**: Custom animations, gradients, and Mexican-themed styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- SMTP email service (Gmail, etc.)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd cantina-mariachi
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/cantina_mariachi?schema=public"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key-here"

# Email Configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=587
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"

# Server Configuration
NODE_ENV="development"
PORT=3000

# Restaurant Information
RESTAURANT_NAME="Cantina Mariachi"
RESTAURANT_ADDRESS="4 Rue Ahmed Charci, Vélodrome, Casablanca, Morocco"
RESTAURANT_PHONE="+212 5223-99178"
RESTAURANT_EMAIL="info@cantinamariachi.ma"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# Seed the database with menu data
npx prisma db seed
```

### 5. Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
cantina-mariachi/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.tsx   # Main navigation
│   │   └── Footer.tsx       # Site footer
│   ├── routes/              # Page components
│   │   ├── home.tsx         # Homepage
│   │   ├── menu.tsx         # Menu page
│   │   ├── order.tsx        # Online ordering
│   │   ├── reservations.tsx # Table booking
│   │   ├── about.tsx        # About us
│   │   └── contact.tsx      # Contact page
│   ├── app.css             # Global styles
│   ├── root.tsx            # Root layout
│   └── routes.ts           # Route configuration
├── server/
│   ├── routes/             # API endpoints
│   │   ├── menu.ts         # Menu API
│   │   ├── orders.ts       # Orders API
│   │   ├── reservations.ts # Reservations API
│   │   ├── contact.ts      # Contact API
│   │   └── newsletter.ts   # Newsletter API
│   ├── app.ts              # Express app configuration
│   └── db.ts               # Database client
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Database seeding
├── public/                 # Static assets
└── server.js               # Server entry point
```

## 🎨 Design System

### Colors
- **Primary Red**: `#dc2626` (Mexican red)
- **Secondary Yellow**: `#eab308` (Mexican yellow)
- **Accent Orange**: `#ea580c` (Festive orange)
- **Success Green**: `#16a34a` (Vegetarian badge)

### Typography
- **Headers**: Fredoka (Mexican-themed, playful)
- **Body**: Inter (Clean, readable)

### Components
- Custom Mexican-themed gradients
- Animated elements (bounce, shine effects)
- Responsive cards with hover effects
- Form styling with focus states

## 🍽️ Menu Categories

- **Appetizers**: Nachos, Guacamole, Jalapeño Poppers
- **Tacos**: Carnitas, Chicken Tinga, Vegetarian options
- **Fajitas**: Chicken, Beef, Shrimp, Mixed, Vegetable
- **Burritos**: California, Chicken, Bean & Rice, Veggie
- **Flautas**: Chicken and Beef varieties
- **Chili con Carne**: Traditional and Vegetarian
- **Weekend Specials**: Pollo a la Brasa (Friday-Sunday)
- **Desserts**: Churros, Flan, Tres Leches
- **Beverages**: Agua Fresca, Horchata, Mexican sodas

## 🔧 API Endpoints

### Menu
- `GET /api/menu`
- `GET /api/menu/category/:id`
- `GET /api/menu/specials`

### Orders
- `POST /api/orders`
- `GET /api/orders/:orderNumber`
- `PATCH /api/orders/:orderNumber/status`

### Reservations
- `POST /api/reservations`
- `GET /api/reservations/availability/:date`

### Contact & Newsletter
- `POST /api/contact`
- `POST /api/newsletter/subscribe`

## 🚀 Deployment

```bash
npm run build
npm start
```

## 🔐 Security Features

- Helmet.js
- CORS
- Input Validation
- Rate Limiting
- Environment Variables

## 📱 Mobile Responsiveness

- Mobile-first design
- Touch-friendly nav
- Optimized images
- Responsive typography
- Mobile-optimized forms and CTAs

## 🌟 SEO Optimization

- Meta Tags
- Structured Data
- Semantic HTML
- Alt Text
- Open Graph

## 📧 Contact Information

**Cantina Mariachi**
- 📍 4 Rue Ahmed Charci, Vélodrome, Casablanca, Morocco
- 📞 +212 5223-99178
- 📧 info@cantinamariachi.ma

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by Cantina Mariachi.

---

Built with ❤️ for authentic Mexican cuisine in Casablanca 🌮
