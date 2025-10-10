import react from "react";
import UseContextHookB from "./UseContextHookB";
import UseContextHookC from "./UseContextHookC";
import { MyContext } from "./MyContextFile";

function UseContextHookA() {
  return (
    <div>
      <UseContextHookC />
    </div>
  );
}
export default UseContextHookA;
