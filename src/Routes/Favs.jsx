import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const getDentsFromStorage = () => {
  const localData = localStorage.getItem("dentists");
  return JSON.parse(localData);
};

const Favs = () => {
  const { state } = useGlobalContext();
  const [dentists, setDentists] = useState([]);
  useEffect(() => {
    setDentists(getDentsFromStorage());
  }, [state.countFavs]);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentists.map((dent) => (
          <Card key={dent.id} {...dent} />
        ))}
      </div>
    </>
  );
};

export default Favs;
