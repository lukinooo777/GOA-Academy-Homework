import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-800">
        <h1 className="text-xl font-bold">MySite</h1>

        {/* desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 p-5 space-y-3 text-center">
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      )}

      {/* 🔹 Hero */}
      <section className="text-center py-16 px-5">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to My Website 🚀
        </h1>
        <p className="mt-4 text-gray-400 md:text-lg">
          Built with React & TailwindCSS
        </p>

        <button className="mt-6 bg-blue-500 px-6 py-2 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </section>

      {/* 🔹 Features */}
      <section className="p-5 md:p-10">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-8">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded hover:scale-105 transition">
            ⚡ Fast
          </div>
          <div className="bg-gray-800 p-6 rounded hover:scale-105 transition">
            📱 Responsive
          </div>
          <div className="bg-gray-800 p-6 rounded hover:scale-105 transition">
            🎨 Modern UI
          </div>
        </div>
      </section>

      {/* 🔹 Projects */}
      <section className="p-5 md:p-10 bg-gray-800">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-5 rounded">Project 1</div>
          <div className="bg-gray-700 p-5 rounded">Project 2</div>
          <div className="bg-gray-700 p-5 rounded">Project 3</div>
        </div>
      </section>

      {/* 🔹 Contact */}
      <section className="p-5 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-5">
          Contact Me
        </h2>

        <input
          type="text"
          placeholder="Your name"
          className="p-2 m-2 rounded text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 m-2 rounded text-black"
        />

        <br />

        <button className="mt-4 bg-green-500 px-6 py-2 rounded">
          Send
        </button>
      </section>

      {/* 🔹 Footer */}
      <footer className="text-center p-5 bg-gray-800 mt-10">
        © 2026 MySite
      </footer>

    </div>
  );
}

export default App;