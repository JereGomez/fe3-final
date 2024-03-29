import { Link, useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <h3>DH Odonto</h3>
      <div>
        <button onClick={() => navigate(-1)}>🔙</button>

        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>

        <Link to={routes.contact}>
          <h4>Contact</h4>
        </Link>

        <Link to={routes.favs}>
          <h4>Favs</h4>
        </Link>
        <button img="./">🌙</button>
      </div>
    </nav>
  );
};

export default Navbar;
