// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

// User Page
function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}

// Product Page
function Product() {
  const { productId } = useParams();

  return <h1>Product Details for {productId}</h1>;
}

// App
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/user/1">User 1</Link> |{" "}
        <Link to="/user/42">User 42</Link> |{" "}
        <Link to="/product/101">Product 101</Link> |{" "}
        <Link to="/product/202">Product 202</Link>
      </nav>

      <Routes>
        <Route path="/user/:id" element={<User />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);