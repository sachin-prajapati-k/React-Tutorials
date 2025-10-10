import react, { useRef } from "react";

function UseRef() {
  const myHead = useRef();
  const handl = () => {
    console.log(myHead.current);
    myHead.current.align = "right";
    myHead.current.style.color = "green";
  };

  return (
    <div>
      <h2 ref={myHead}>hello</h2>
      <button onClick={handl}>click</button>
    </div>
  );
}

export default UseRef;
