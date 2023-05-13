import { GET_ALL_ANNONCES, SET_SELECTED_ANNONCE } from "../actions/actionTypes";

const annonceInitState = {
    editList: [],
    baseList: [],
    selectedAnnonce: null
}

const annonceReducer = (state = annonceInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GET_ALL_ANNONCES:
            return { ...state, editList: payload, baseList: payload }
        case SET_SELECTED_ANNONCE:
            return { ...state, selectedAnnonce: payload }

        default:
            return state;
    }
}

export default annonceReducer