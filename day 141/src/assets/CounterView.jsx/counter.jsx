function CounterView({ count, increase, decrease, reset }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterView;