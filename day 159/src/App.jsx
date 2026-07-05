// App.jsx

import { useState } from "react";
import CartErrorBoundary from "./CartErrorBoundary";

export default function App() {
  const products = [
    "Laptop",
    "Phone",
    "Keyboard",
    "Mouse",
    "Monitor",
  ];

  
  const [cart, setCart] = useState([]);

  
  const [resetKey, setResetKey] = useState(0);


  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  
  const resetCart = () => {
    setCart([]);
    setResetKey((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>ონლაინ მაღაზია</h1>

      
      <ProductList products={products} addToCart={addToCart} />

      <hr />

      <CartErrorBoundary onReset={resetCart} key={resetKey}>
        <ShoppingCart cart={cart} />
      </CartErrorBoundary>
    </div>
  );
}


function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>პროდუქტები</h2>

      {products.map((product, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <span>{product}</span>

          <button
            onClick={() => addToCart(product)}
            style={{ marginLeft: "10px" }}
          >
          
          </button>
        </div>
      ))}
    </div>
  );
}

function ShoppingCart({ cart }) {
  // თუ 3-ზე მეტი ნივთია -> error
  if (cart.length > 3) {
    throw new Error("Cart crashed!");
  }

  return (
    <div>
      <h2>კალათა</h2>

      {cart.length === 0 ? (
        <p>კალათა ცარიელია</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}