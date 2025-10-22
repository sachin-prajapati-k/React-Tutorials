import { BUY_CAKE } from "./Types";
const initialState = {
  NoofCake: 20,
};
const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        NoofCake: state.NoofCake - action.payload,
      };
    default:
      return state;
  }
};

export default CakeReducer;
