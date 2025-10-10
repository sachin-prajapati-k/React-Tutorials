import { useNavigate } from "react-router-dom";
function UseNavigate() {
  const navigate = useNavigate();
  const navigateto = (url) => {
    navigate(url);
  };

  return (
    <div>
      <button onClick={() => navigateto("/")}>Home</button>
      <button onClick={() => navigateto("/UseEffectCounter")}>counter</button>
    </div>
  );
}
export default UseNavigate;
