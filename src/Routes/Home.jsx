import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentList.map((dent) => (
          <Card key={dent.id} {...dent} />
        ))}
      </div>
    </main>
  );
};

export default Home;
