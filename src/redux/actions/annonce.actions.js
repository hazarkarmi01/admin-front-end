import { deleteApi, getApi } from "../../utils/apiMethods";
import { GET_ALL_ANNONCES, SEARCH_ANNONCE } from "./actionTypes";

const getAllAnnonce = (data) => {
  return {
    type: GET_ALL_ANNONCES,
    payload: data,
  };
};
export const getAllAnnonceApi = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "access-token": token,
      },
    };
    let response = await getApi("annonce", config);
    if (response && response.success) {
      dispatch(getAllAnnonce(response.result));
    }
  } catch (error) {}
};
export const deleteAnnonce = (id, token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await deleteApi(`annonce/${id}`, config);
    if (result.success) {
      dispatch(getAllAnnonceApi(token));
    }
  } catch (error) {}
};

export const searchAnnonce = (data) => {
  return {
    type: SEARCH_ANNONCE,
    payload: data,
  };
};
