import react from "react";
import { useState } from "react";
function CounterAppFun() {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={plus}>increase</button>
      <button onClick={count > 0 ? minus : null}>Decrease</button>
    </>
  );
}
export default CounterAppFun;
