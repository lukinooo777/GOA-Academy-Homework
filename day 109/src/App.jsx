import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    document.title = `Counter: ${count}`;
    console.log("Effect გაეშვა");

    
    return () => {
      console.log("Cleanup შესრულდა");
    };
  }, [count]); 

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        მომატება
      </button>
    </div>
  );
}

export default App;
