// import react, { Component } from "react";
// class ChildComponent extends Component {
//   render() {
//     return (
//       <>
//         <button onClick={() => this.props.call("sagar")}>click</button>
//       </>
//     );
//   }
// }
// export default ChildComponent;

import react from "react";
function ChildComponent(props) {
  const { name, methodCall } = props;
  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => methodCall("sachin")}>click</button>
    </>
  );
}

export default ChildComponent;
