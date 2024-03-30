import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";


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
