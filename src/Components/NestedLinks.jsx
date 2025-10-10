import { useNavigate, Link, Outlet } from "react-router-dom";
import Shoes from "./Shoes";
import Clothes from "./Clothes";
function NestedLinks() {
  return (
    <div>
      <nav className="nav navbar-light d-flex gap-3">
        <Link to="Shoes">Shoes</Link>
        <Link to="Clothes">clother</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default NestedLinks;
