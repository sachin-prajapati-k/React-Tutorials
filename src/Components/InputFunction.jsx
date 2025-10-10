// import react, { useState } from "react";

// function InputFunction() {
//   const myData = {
//     name: "sachin",
//     email: "xyz@gamil.com",
//   };

//   const [data, setData] = useState(myData);
//   const forName = (e) => {
//     setData({ name: e.target.value });
//   };
//   const forEmail = (e) => {
//     setData({ email: e.target.value });
//   };
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <h1>{data.email}</h1>
//       <form>
//         <label>enter your name</label>
//         <input type="text" onChange={forName} value={data.name} />
//         <label>enter you email</label>
//         <input type="email" onChange={forEmail} value={data.email} />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
// export default InputFunction;

import react, { useState } from "react";

function InputFunction() {
  const myData = {
    name: "sachin",
    email: "xyz@gamil.com",
  };

  const [data, setData] = useState(myData);
  const change = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handle = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <form onSubmit={handle}>
        <label>enter your name</label>
        <input type="text" name="name" onChange={change} value={data.name} />
        <label>enter you email</label>
        <input type="email" name="email" onChange={change} value={data.email} />
        <input type="submit" />
      </form>
    </div>
  );
}
export default InputFunction;
