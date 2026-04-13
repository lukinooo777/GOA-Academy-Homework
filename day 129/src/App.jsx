import React from "react";

function App() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">

      {/* Card */}
      <div className="bg-gray-900 text-white p-8 rounded-2xl w-80 text-center">

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/100"
          alt="avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />

        {/* Name */}
        <h1 className="text-xl font-bold">Jessica Randall</h1>

        {/* Location */}
        <p className="text-green-400 text-sm mb-3">
          London, United Kingdom
        </p>

        {/* Bio */}
        <p className="text-gray-400 text-sm mb-5">
          "Front-end developer and avid reader."
        </p>

        {/* Links */}
        <div className="flex flex-col gap-3">

          <button className="bg-gray-800 py-2 rounded hover:bg-green-400 hover:text-black transition">
            GitHub
          </button>

          <button className="bg-gray-800 py-2 rounded hover:bg-green-400 hover:text-black transition">
            Frontend Mentor
          </button>

          <button className="bg-gray-800 py-2 rounded hover:bg-green-400 hover:text-black transition">
            LinkedIn
          </button>

          <button className="bg-gray-800 py-2 rounded hover:bg-green-400 hover:text-black transition">
            Twitter
          </button>

          <button className="bg-gray-800 py-2 rounded hover:bg-green-400 hover:text-black transition">
            Instagram
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;