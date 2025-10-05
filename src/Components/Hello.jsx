import React from "react";

function Hello(xy) {
  return (
    <div>
      <h1>My Name:{xy.myName}</h1>
      <h1>Name: {xy.age}</h1>
      {xy.children}
    </div>
  );
}

export default Hello;
