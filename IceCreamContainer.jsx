import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { buy_iceCreams } from "./redux";
function IceCreamContainer(props) {
  return (
    <div>
      <h2> number of IceCreame-{props.NoofIcecream}</h2>
      <Button onClick={props.buy_iceCreams}>add cake</Button>
    </div>
  );
}

const mapStatetoProp = (State) => {
  return {
    NoofIcecream: State.iceCream.NoofIcecream,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    buy_iceCreams: () => dispatch(buy_iceCreams()),
  };
};

export default connect(mapStatetoProp, mapDispatchtoProp)(IceCreamContainer);
