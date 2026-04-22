// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import "./index.css";

// Home Page
function Home() {
  return <h1>Home Page</h1>;
}

// About Page
function About() {
  return <h1>About Page</h1>;
}

// Contact Page
function Contact() {
  return <h1>Contact Page</h1>;
}

// Dashboard Nested Pages
function Overview() {
  return <h2>Overview Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

// Dashboard Page
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <Link to="overview">Overview</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

// Product Nested Pages
function ProductInfo() {
  const { id } = useParams();
  return <h2>Product {id} Info</h2>;
}

function ProductReviews() {
  const { id } = useParams();
  return <h2>Product {id} Reviews</h2>;
}

// Product Page
function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product {id}</h1>

      <nav>
        <Link to="info">Info</Link> |{" "}
        <Link to="reviews">Reviews</Link>
      </nav>

      <Outlet />
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/product/1">Product 1</Link>
      </nav>

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Product Nested Routes */}
        <Route path="/product/:id" element={<Product />}>
          <Route path="info" element={<ProductInfo />} />
          <Route path="reviews" element={<ProductReviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);