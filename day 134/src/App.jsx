import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl mb-4">{count}</h1>

      {/* +1 */}
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="bg-blue-500 px-4 py-2 m-2 text-white rounded"
      >
        +1
      </button>

      {/* +5 */}
      <button
        onClick={() => {
          // callback ფორმა აუცილებელია,
          // რადგან React შეიძლება გააერთიანოს updates
          // prev → ყოველთვის იღებს ბოლო მნიშვნელობას
          for (let i = 0; i < 5; i++) {
            setCount(prev => prev + 1);
          }
        }}
        className="bg-green-500 px-4 py-2 m-2 text-white rounded"
      >
        +5
      </button>
    </div>
  );
}



import { useState } from "react";

function NameList() {
  const [names, setNames] = useState([]);

  // დამატება
  const addName = () => {
    // prevState ვიყენებთ immutable update-ისთვის
    setNames(prev => [...prev, "John"]);
  };

  // წაშლა index-ით
  const deleteName = (index) => {
    setNames(prev =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="text-center p-5">
      <button
        onClick={addName}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add John
      </button>

      <ul>
        {names.map((name, index) => (
          <li
            key={index}
            onClick={() => deleteName(index)}
            className="cursor-pointer hover:text-red-400"
          >
            {name} (click to delete)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;