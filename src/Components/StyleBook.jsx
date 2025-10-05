import react, { useState } from "react";

function StyleBook() {
  const style1 = {
    color: "blue",
    fontFamily: "roboto",
    backgroundColor: "lightgrey",
  };
  const style2 = {
    color: "lightyellow",
    backgroundColor: "black",
    fontSize: "30px",
    fontFamily: "cursive",
  };

  const [theme, setTheme] = useState(style1);
  const Light = () => {
    setTheme(style1);
  };
  const Dark = () => {
    setTheme(style2);
  };
  return (
    <div>
      <h1 style={theme}>i am sachin</h1>
      <button onClick={Dark}>Dark Mode</button>
      <button onClick={Light}>Light Mode</button>
    </div>
  );
}
export default StyleBook;
