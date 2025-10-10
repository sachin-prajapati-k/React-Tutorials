import react, { useState } from "react";
function UseStateObject() {
  const myObj = {
    name: "sachin",
    age: 25,
    color: "white",
    isMale: true,
  };
  const [obj, setObj] = useState(myObj);

  return (
    <div>
      <h1>{obj.name}</h1>
      <h1>{obj.age}</h1>
      <h1>{obj.color}</h1>
      <h1>{obj.isMale.toString()}</h1>
      <button
        onClick={() =>
          setObj((oldObj) => {
            return { ...oldObj, name: "kartik", age: 33 };
          })
        }
      >
        click
      </button>
    </div>
  );
}

export default UseStateObject;
