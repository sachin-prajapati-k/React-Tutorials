import { BUY_ICECREAM } from "./Types";
const iniitialState = {
  NoofIcecream: 10,
};

const iceCreamReducer = (state = iniitialState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        NoofIcecream: state.NoofIcecream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
