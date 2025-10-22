// import react, { useState } from "react";

// function UseStateCompo() {
//   const [Name, setName] = useState("sagar");
//   function changeName(value) {
//     setName(value);
//   }
//   return (
//     <div>
//       <h1>{Name}</h1>
//       <button onClick={() => changeName("harsh")}>clickme</button>
//     </div>
//   );
// }

// export default UseStateCompo;

import react, { useState } from "react";

function UseStateCompo() {
  const myArr = useState("sagar");
  //   function changeName(value) {
  //     myArr[1](value);
  //   }
  return (
    <div>
      <h1>{myArr[0]}</h1>
      <button onClick={() => myArr[1]("rahul")}>clickme</button>
    </div>
  );
}

export default UseStateCompo;
