import { useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import { buyCake } from "./redux";
import { connect } from "react-redux";
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2> number of cake-{props.NoofCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <Button onClick={() => props.buyCake(number)}>add {number}cake</Button>
    </div>
  );
}

const mapStatetoProp = (State) => {
  return {
    NoofCake: State.cake.NoofCake,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStatetoProp, mapDispatchtoProp)(NewCakeContainer);
