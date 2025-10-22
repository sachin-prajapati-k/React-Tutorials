const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const _reduxThunk = require("redux-thunk");
const thunkMiddleware = _reduxThunk.thunk || _reduxThunk.default || _reduxThunk;

// if (typeof thunkMiddleware !== "function") {
//   console.error("redux-thunk import shape:", _reduxThunk);
//   throw new Error("redux-thunk did not export a middleware function.");
// }
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetch_users_request = "fetch_users_request";
const fetch_users_success = "fetch_users_success";
const fetch_users_failure = "fetch_users_failure";

const fetchUsersRequest = () => ({ type: fetch_users_request });
const fetchUsersSuccess = (users) => ({
  type: fetch_users_success,
  payload: users,
});
const fetchUsersFailure = (error) => ({
  type: fetch_users_failure,
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_users_request:
      return { ...state, loading: true };
    case fetch_users_success:
      return { ...state, loading: false, users: action.payload, error: "" };
    case fetch_users_failure:
      return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());

module.exports = store;
