import { useState } from "react";

function BuggyCounter() {

  const [count, setCount] = useState(0);

  // როდესაც count გახდება 5
  // კომპონენტი აგდებს შეცდომას
  if (count === 5) {
    throw new Error("Counter reached 5");
  }

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

    </div>
  );
}

export default BuggyCounter;