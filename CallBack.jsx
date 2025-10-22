import react, { useEffect } from "react";
function CallBack() {
  let myname = null;
  const setmyname = (ele) => {
    myname = ele;
  };
  useEffect(() => {
    console.log(myname.value);
    myname.focus();
    myname.style.color = "green";
    myname.style.background = "red ";
  }, []);
  const handle = (e) => {
    e.preventDefault();
    console.log(myname.value);
    // myname.style.color = "red";
  };
  return (
    <div>
      <form onSubmit={handle}>
        <input type="text" placeholder="name" ref={setmyname} />
        <button type="submit">click</button>
      </form>
    </div>
  );
}
export default CallBack;
