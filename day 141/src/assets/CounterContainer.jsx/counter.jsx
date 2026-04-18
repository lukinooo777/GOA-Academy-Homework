import { useState } from "react";
import CounterView from "./CounterView";

function CounterContainer() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <CounterView
      count={count}
      increase={increase}
      decrease={decrease}
      reset={reset}
    />
  );
}

export default CounterContainer;  