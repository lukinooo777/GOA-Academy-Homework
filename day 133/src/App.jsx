import { useState } from "react";

function App() {
  // 🔹 state - ვინახავთ counter მნიშვნელობას
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">

      {/* Card */}
      <div className="bg-gray-800 p-10 rounded-2xl text-center shadow-lg">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-5">Counter App</h1>

        {/* Count Value */}
        <p className="text-5xl font-bold mb-6">{count}</p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">

          {/* Decrease */}
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 px-5 py-2 rounded hover:bg-red-600 transition"
          >
            -
          </button>

          {/* Reset */}
          <button
            onClick={() => setCount(0)}
            className="bg-gray-600 px-5 py-2 rounded hover:bg-gray-700 transition"
          >
            Reset
          </button>

          {/* Increase */}
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 px-5 py-2 rounded hover:bg-green-600 transition"
          >
            +
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;