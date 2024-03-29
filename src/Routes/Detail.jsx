import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentistDetail, setDentistDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    async function makePetition() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/" + params.id
        );
        const dentist = await response.json();
        setDentistDetail(dentist);
      } catch (e) {
        throw new Error(e);
      }
    }
    makePetition();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistDetail.name}</td>
            <td>{dentistDetail.email}</td>
            <td>{dentistDetail.phone}</td>
            <td>{dentistDetail.website}</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
