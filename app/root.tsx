import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
  },
];

export const meta: Route.MetaFunction = () => [
  { title: "Cantina Mariachi - Authentic Mexican Restaurant in Casablanca" },
  { 
    name: "description", 
    content: "Experience authentic Mexican cuisine at Cantina Mariachi in Casablanca. Fresh tacos, fajitas, nachos, and our famous weekend Pollo a la Brasa. Order online or book a table!" 
  },
  { name: "keywords", content: "Mexican restaurant Casablanca, best Mexican food Casablanca, Cantina Mariachi, tacos, fajitas, nachos, Pollo a la Brasa, online ordering, table reservations" },
  { property: "og:title", content: "Cantina Mariachi - Authentic Mexican Restaurant in Casablanca" },
  { property: "og:description", content: "Experience authentic Mexican cuisine at Cantina Mariachi in Casablanca. Fresh tacos, fajitas, nachos, and our famous weekend Pollo a la Brasa." },
  { property: "og:type", content: "restaurant" },
  { property: "og:locale", content: "en_US" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Cantina Mariachi - Authentic Mexican Restaurant in Casablanca" },
  { name: "twitter:description", content: "Experience authentic Mexican cuisine at Cantina Mariachi in Casablanca." },
  { name: "robots", content: "index, follow" },
  { name: "author", content: "Cantina Mariachi" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "¡Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 p-4 container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">{message}</h1>
          <p className="text-lg text-gray-600 mb-8">{details}</p>
          <a 
            href="/" 
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Return Home
          </a>
        </div>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto mt-8 bg-gray-100 rounded">
            <code>{stack}</code>
          </pre>
        )}
      </main>
      <Footer />
    </div>
  );
}
