// import { connect } from "react-redux";
// function ItemContainer(props) {
//   return (
//     <div>
//       <h2>{props.item}</h2>
//     </div>
//   );
// }
// const mapStateToProps = (state, ownProps) => {
//   const ItemState = ownProps.Cake
//     ? state.Cake.NoofCake
//     : state.IceCream.NoofIcecream;
//   return {
//     item: ItemState,
//   };
// };

// export default connect(mapStateToProps)(ItemContainer);
import { connect } from "react-redux";
import { buy_iceCreams, buyCake } from "./redux";
import { BUY_ICECREAM } from "./redux/IceCream/Types";

function ItemContainer(props) {
  return (
    <div>
      <h2>{props.item}</h2>
      <button onClick={props.buyItem}>buy item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const ItemState = ownProps.Cake
    ? state.cake.NoofCake
    : state.iceCream.NoofIcecream;
  return {
    item: ItemState,
  };
};

const mapDispatchtoProp = (dispatch, ownProps) => {
  const dispatchFun = ownProps.Cake
    ? () => dispatch(buyCake())
    : () => dispatch(buy_iceCreams());
  return {
    buyItem: dispatchFun,
  };
};

export default connect(mapStateToProps, mapDispatchtoProp)(ItemContainer);
