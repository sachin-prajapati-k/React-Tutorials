import { combineReducers } from "redux";
import iceCreamReducer from "./IceCream/Reducer";
import CakeReducer from "./cake/Reducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
