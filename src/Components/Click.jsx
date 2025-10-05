import React, { Component } from "react";

function Click(props) {
  const showData = (xy) => {
    alert(xy);
  };
  return (
    <div>
      <button onClick={() => showData(props.age)}>click me</button>
    </div>
  );
}

export default Click;
