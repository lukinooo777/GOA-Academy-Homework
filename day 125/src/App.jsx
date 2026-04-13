import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-800">
        <h1 className="text-xl font-bold">MySite</h1>

        {/* desktop menu */}
        <ul className="hidden md:flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* mobile menu */}
        <button className="md:hidden">☰</button>
      </nav>

      {/* Hero */}
      <section className="text-center p-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Responsive Website
        </h1>
        <p className="mt-3 text-sm md:text-lg">
          Works on all devices
        </p>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="bg-gray-800 p-5 rounded">Card 1</div>
        <div className="bg-gray-800 p-5 rounded">Card 2</div>
        <div className="bg-gray-800 p-5 rounded">Card 3</div>
      </section>

      {/* Footer */}
      <footer className="text-center p-5 bg-gray-800 mt-10">
        © 2026 MySite
      </footer>
    </div>
  );
}

export default App;






// 🔹 1. Fluid Design
// ელემენტები ზომაში იცვლება % ან vw გამოყენებით
// მაგალითად: width: 100%
// ეს ნიშნავს რომ დიზაინი "მოქნილია"

// 🔹 2. Adaptive Design
// რამდენიმე კონკრეტულ ზომაზე იცვლება დიზაინი
// მაგალითად: 320px, 768px, 1024px
// თითო breakpoint-ზე layout იცვლება

// 🔹 3. Responsive Design
// Fluid + Media Queries ერთად
// საიტი ავტომატურად ერგება ყველა ეკრანს

// 🔹 4. Mobile First
// ჯერ ვაკეთებთ mobile ვერსიას
// შემდეგ ვამატებთ md, lg styles
// Tailwind ზუსტად ამას იყენებს

// 🔹 5. Breakpoints
// breakpoint = ეკრანის ზომა სადაც დიზაინი იცვლება
// მაგალითად: 768px → tablet
// ვიყენებთ media queries-ით