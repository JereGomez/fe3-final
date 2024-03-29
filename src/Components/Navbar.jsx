import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const changeTheme = () => {
    const theme = state.theme === "" ? "dark" : "";
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3 style={{ fontWeight: "400" }}>
          <span style={{ color: "red" }}>D</span>H Odonto
        </h3>
      </div>
      <div className="navbar-right">
        <ul className="navbar-routes">
          <li>
            <button onClick={() => navigate(-1)} className="nav-button">
              🔙
            </button>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button onClick={() => changeTheme()} className="nav-button">
          🌜
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
