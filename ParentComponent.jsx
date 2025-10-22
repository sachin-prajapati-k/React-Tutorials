// import ChildComponent from "./ChildComponent";
// import react, { Component } from "react";
// class ParentComponent extends Component {
//   ParentMethod = (name) => {
//     alert("hello i am parent method" + name);
//   };
//   render() {
//     return (
//       <>
//         <ChildComponent call={this.ParentMethod}></ChildComponent>
//       </>
//     );
//   }
// }

// export default ParentComponent;

import react from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  function showData(name) {
    alert("hello parents" + name);
  }

  return (
    <>
      <ChildComponent methodCall={showData} name="sachin" />
    </>
  );
}

export default ParentComponent;
