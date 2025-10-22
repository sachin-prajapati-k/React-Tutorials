import react, { useState } from "react";
function FormReact() {
  const [value, setValue] = useState("dfsd");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value);
        }}
      >
        <label>Enter your name</label>
        <input
          type="text"
          value={value.toLowerCase()}
          onChange={(e) => setValue(e.target.value.substring(0, 10))}
        />
        <input type="Submit" />
      </form>
      <h1> your name is {value.toLowerCase()}</h1>
    </div>
  );
}

export default FormReact;
