import react from "react";
import UseContextHookC from "./UseContextHookC";
import { useContext } from "react";
import { MyName } from "../App";
function UseContextHookB() {
  const bName = useContext(MyName);
  return (
    <div>
      <h1>hello i am from lsdkfj{bName}</h1>
    </div>
  );
}
export default UseContextHookB;
