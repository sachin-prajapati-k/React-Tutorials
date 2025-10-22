import redux, {
  combineReducers as _combineReducers,
  applyMiddleware,
} from "redux";
import { createLogger } from "redux-logger";
const { createStore } = redux;
const combineReducers = _combineReducers;
const logger = createLogger();
const applyMiddleWare = applyMiddleware;

const MY_DATA = "MY_DATA";
const MY_FRIENDS = "MY_FRIENDS";

function MyInfo() {
  return {
    type: MY_DATA,
    info: "my information",
  };
}
function MyFriends() {
  return {
    type: MY_FRIENDS,
    info: "my friends",
  };
}

const initialHobbyState = {
  myHobby: "reading",
};

const initialFriendsState = {
  myfriends: "harsh",
};
const reducerHobby = (state = initialHobbyState, action) => {
  switch (action.type) {
    case MY_DATA:
      return { ...state, myHobby: state.myHobby + "listing" };
    default:
      return state;
  }
};
const reducerFriends = (state = initialFriendsState, action) => {
  switch (action.type) {
    case MY_FRIENDS:
      return { ...state, myfriends: state.myfriends + "rahul" };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  hobby: reducerHobby,
  friends: reducerFriends,
});
const store = createStore(rootReducer, applyMiddleWare(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(MyInfo());
store.dispatch(MyInfo());
store.dispatch(MyInfo());
store.dispatch(MyFriends());
store.dispatch(MyFriends());
store.dispatch(MyFriends());
unsubscribe();
