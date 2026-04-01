function App() {
  return (
    <div className="p-6 space-y-6">

      {/* 1. Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Button
      </button>

      {/* 2. Card */}
      <div className="bg-white shadow-md p-4 rounded">
        Card
      </div>

      {/* 3. Input */}
      <input className="border p-2 rounded w-full" placeholder="Type..." />

      {/* 4. Navbar */}
      <div className="flex justify-between bg-gray-800 text-white p-4">
        <p>Logo</p>
        <p>Menu</p>
      </div>

      {/* 5. Grid */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-blue-300 p-4">3</div>
      </div>

      {/* 6. Center Box */}
      <div className="flex justify-center items-center h-40 bg-gray-200">
        Center
      </div>

      {/* 7. Image */}
      <img className="w-32 rounded-full" src="https://via.placeholder.com/150" />

      {/* 8. Badge */}
      <span className="bg-green-500 text-white px-2 py-1 rounded">
        New
      </span>

      {/* 9. Alert */}
      <div className="bg-red-200 text-red-800 p-3 rounded">
        Error message
      </div>

      {/* 10. Footer */}
      <div className="text-center text-gray-500">
        Footer
      </div>

    </div>
  );
}

export default App;