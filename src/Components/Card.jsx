import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const location = useLocation();
  const Pathname = location.pathname;
  const { dispatch } = useGlobalContext();
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    //console.log(dispatch({ type: "ADD_FAV", payload: id }));
    const user = { name, username, id };
    let favList = [];
    const localData = localStorage.getItem("dentists");
    localData && (favList = JSON.parse(localData));

    if (
      favList.filter((item) => item.id === user.id).length === 0 &&
      Pathname !== "/favs"
    ) {
      favList.push(user);
      dispatch({ type: "ADD_FAV" });
      alert("Dentist added to favorites");
    } else {
      favList.splice(favList.indexOf(user), 1);
      dispatch({ type: "DELETE_FAV" });
      alert("Dentist removed to favorites");
    }
    localStorage.setItem("dentists", JSON.stringify(favList));
  };

  const buttonlogo = () => {
    if (Pathname === "/favs") {
      return (
        <button onClick={addFav} className="favButton">
          ❌
        </button>
      );
    } else {
      return (
        <button onClick={addFav} className="favButton">
          🌟
        </button>
      );
    }
  };

  return (
    <div className="card">
      <Link to={"/detail/" + id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" style={{ width: "100%" }}></img>
        <h3>{name}</h3>
        <h4>{username}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      {buttonlogo()}
    </div>
  );
};
export default Card;
