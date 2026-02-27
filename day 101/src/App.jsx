import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>My Small Website</h1>
        <p>Simple React Project</p>
      </header>

      <section className="card">
        <h2>About</h2>
        <p>This is a small website built with React.</p>
      </section>

      <section className="card">
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </section>

      <footer>
        <p>© 2026 My Website</p>
      </footer>
    </div>
  );
}