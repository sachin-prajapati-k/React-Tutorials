import react, { useContext } from "react";
import { MyName } from "../App";
function UseContextHookC() {
  const name = useContext(MyName);
  return (
    <div>
      <h1>hello{name}</h1>
    </div>
  );
}
export default UseContextHookC;
