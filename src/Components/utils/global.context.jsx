import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";
export const initialState = {
  theme: "",
  favs: [],
  dentList: [],
  countFavs: 0,
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/").then((res) => {
      dispatch({ type: "GET_LIST", payload: res.data });
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = () => useContext(ContextGlobal);
