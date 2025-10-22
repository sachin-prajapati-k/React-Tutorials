// import react, { Component } from "react";
// class EventBind extends Component {
//   constructor() {
//     super();
//     // this.change = this.change.bind(this);
//     this.state = {
//       Name: "sachin",
//       age: 24,
//     };
//   }
//   change() {
//     this.setState({
//       Name: "harsh",
//       age: 44,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.Name}</h1>
//         <h1>{this.state.age}</h1>
//         <button onClick={this.change.bind(this)}>click me</button>
//       </div>
//     );
//   }
// }

// export default EventBind;
import React, { useState } from "react";

function EventBind() {
  const [value, setValue] = useState({ name: "sachin", age: 25 });
  function change() {
    setValue({ name: "harsh", age: 33 });
  }

  return (
    <>
      <h1>{value.name}</h1>
      <h1>{value.age}</h1>
      <button onClick={change}>click</button>
    </>
  );
}

export default EventBind;
