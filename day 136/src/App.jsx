// App.jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={styles.container}>
      <h1>Simple Counter Site</h1>
      <h2>{count}</h2>

      <div style={styles.buttons}>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default App;