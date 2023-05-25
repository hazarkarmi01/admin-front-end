import {
  GET_ALL_ANNONCES,
  SEARCH_ANNONCE,
  SET_SELECTED_ANNONCE,
} from "../actions/actionTypes";

const annonceInitState = {
  editList: [],
  baseList: [],
  selectedAnnonce: null,
};

const annonceReducer = (state = annonceInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_ALL_ANNONCES:
      return { ...state, editList: payload, baseList: payload };
    case SET_SELECTED_ANNONCE:
      return { ...state, selectedAnnonce: payload };
    case SEARCH_ANNONCE:
     
      return {
        ...state,
        editList:
          payload == ""
            ? state.baseList
            : state.baseList.filter((elm) => {
                const regex = new RegExp(payload, "i");
                return regex.test(elm.title) || regex.test(elm.description);
              }),
      };

    default:
      return state;
  }
};

export default annonceReducer;
