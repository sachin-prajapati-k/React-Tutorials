import react, { useEffect, useRef } from "react";

function UnControled() {
  const nameRef = useRef();
  const mailRef = useRef();

  const handle = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(mailRef.current.value);
    const value = document.getElementById("num").value;
    console.log(value);
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handle}>
        <label>Enter your name</label>
        <input type="text" ref={nameRef} placeholder="name" />
        <label>Enter your email</label>
        <input type="email" ref={mailRef} placeholder="email" />
        <input type="number" id="num" placeholder="number" />
        <input type="submit" />
      </form>
    </div>
  );
}
export default UnControled;
