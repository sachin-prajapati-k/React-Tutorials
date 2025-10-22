import { createStore, applyMiddleware } from "redux";
import CakeReducer from "./cake/Reducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
const Store = createStore(rootReducer, applyMiddleware(logger));
export default Store;
