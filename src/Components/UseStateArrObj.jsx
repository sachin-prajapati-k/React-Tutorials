import react, { useState } from "react";

function UseStateArrObj() {
  const myArr = [1, 2, 3, 4, 5];
  const [value, setValue] = useState(myArr);
  const newArr = () => {
    // const updatedArr = value.map((item) => item * 2);
    setValue((oldArr) => {
      return [...oldArr, 56, 4, 5, 3];
    });
  };
  return (
    <div>
      <h1>hello</h1>
      <ul>
        {value.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={newArr}>click</button>
    </div>
  );
}
export default UseStateArrObj;
