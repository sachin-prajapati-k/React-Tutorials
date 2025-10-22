import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { buyCake } from "./redux";

export const HooksCake = () => {
  const dispatch = useDispatch();
  const NoofCake = useSelector((state) => state.NoofCake);
  return (
    <div>
      <h2>No of cake {NoofCake}</h2>
      <Button onClick={() => dispatch(buyCake())}>buy cake</Button>
    </div>
  );
};
