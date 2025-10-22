// import react from "react";
// import { Link } from "react-router-dom";

// function MyNav() {
//   return (
//     <div>
//       <nav className="navbar-dark bg-light d-flex gap-3 justify-content-end m-3">
//         <Link to={"/"}>Click</Link>
//         <Link to={"/unControled"}>UnControled</Link>
//         <Link to={"/UseEffectCounter"}>Counter</Link>
//       </nav>
//     </div>
//   );
// }
// export default MyNav;
import react from "react";
import NestedLinks from "./NestedLinks";
import { NavLink, useNavigate } from "react-router-dom";

function MyNav() {
  const navigate = useNavigate();
  const hightlight = ({ isActive }) => {
    return isActive ? "nav-link active fw-bold" : "nav-link";
  };
  return (
    <div>
      <nav className="navbar-dark bg-light d-flex gap-3 justify-content-end m-3">
        <NavLink className={hightlight} to={"/"}>
          Click
        </NavLink>
        <NavLink className={hightlight} to={"/unControled"}>
          UnControled
        </NavLink>
        <NavLink className={hightlight} to={"/UseEffectCounter"}>
          Counter
        </NavLink>
        <NavLink className={hightlight} to={"/nested"}>
          Products
        </NavLink>
        <button onClick={() => navigate(-1)}>back</button>
      </nav>
    </div>
  );
}
export default MyNav;
