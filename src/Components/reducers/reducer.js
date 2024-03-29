export const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    //DENTISTS
    case "GET_LIST":
      return { ...state, dentList: action.payload };
    case "GET_DETAIL":
      return { ...state, favSelected: action.payload };

    //FAVORITES
    case "ADD_FAV":
      return { ...state, countFavs: state.countFavs + 1 };
    case "DELETE_FAV":
      return { ...state, countFavs: state.countFavs - 1 };
    case "GET_FAVS":
      return { ...state, favList: action.payload };

    //THEME
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
  }
};
