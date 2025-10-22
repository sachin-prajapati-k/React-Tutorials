import react from "react";
import { useReducer } from "react";
function Reducer() {
  const initialState = 0;
  function reducer(state, action) {
    switch (action) {
      case "plush":
        return state + 1;
      case "minus":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("plush")}>Increase</button>
      <button onClick={() => dispatch("minus")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
export default Reducer;
