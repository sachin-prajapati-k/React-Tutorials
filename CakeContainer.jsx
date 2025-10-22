import React from "react";
import { Button } from "react-bootstrap";
import { buyCake } from "./redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h2> number of cake-{props.NoofCake}</h2>
      <Button onClick={props.buyCake}>add cake</Button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatetoProp, mapDispatchtoProp)(CakeContainer);
