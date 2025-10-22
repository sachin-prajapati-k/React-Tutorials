import react, { useState } from "react";

function MultiSelect() {
  const [proarr, setProarr] = useState([]);

  const getValue = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    if (e.target.checked) {
      return setProarr([...proarr, e.target.value]);
    } else {
      setProarr(proarr.filter((item) => item !== e.target.value));
    }
  };
  function mypro(e) {
    e.preventDefault();
    console.log(proarr);
    console.log(e.target.checked);
  }

  return (
    <div>
      <form onSubmit={mypro}>
        <input type="checkbox" value={"rea"} onChange={getValue}></input>
        <input type="checkbox" value={"Jupiter"} onChange={getValue}></input>
        <input type="checkbox" value={"amber"} onChange={getValue}></input>
        <input type="checkbox" value={"zava"} onChange={getValue}></input>
        <input type="checkbox" value={"slash"} onChange={getValue}></input>
        <input type="checkbox" value={"alcove"} onChange={getValue}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default MultiSelect;
