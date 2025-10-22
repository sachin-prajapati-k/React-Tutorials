import react, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [counter, setCounter] = useState(0);
  const [name, setname] = useState("sachin");
  useEffect(() => {
    console.log("hello i am rendered");
  }, [counter, name]);
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCounter(counter + 1)}>click</button>
      <button onClick={() => setname("kartik")}>click</button>
    </div>
  );
}
export default UseEffectCounter;
