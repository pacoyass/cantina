import "react-router";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { db } from "./db";

// Import API routes
import menuRoutes from "./routes/menu";
import orderRoutes from "./routes/orders";
import reservationRoutes from "./routes/reservations";
import contactRoutes from "./routes/contact";
import newsletterRoutes from "./routes/newsletter";

dotenv.config();

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_EXPRESS: string;
    db: typeof db;
  }
}

export const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
    },
  },
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://cantinamariachi.ma'] // Replace with your actual domain
    : ['http://localhost:3000'],
  credentials: true,
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// React Router handler
app.use(
  createRequestHandler({
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      return {
        VALUE_FROM_EXPRESS: "Hello from Express",
        db,
      };
    },
  }),
);
