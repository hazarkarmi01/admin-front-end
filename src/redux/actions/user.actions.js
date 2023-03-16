import { getApi, postApi } from "../../utils/apiMethods";
import { GET_ALL_USERS, SEARCH_USER } from "./actionTypes";

const getAllUsers = (data) => {
  return {
    type: GET_ALL_USERS,
    payload: data,
  };
};

const getAllUsersApi = () => async (dispatch) => {
  const result = await getApi("users");
  //console.log("Result", result);
  if (result && result.success) {
    dispatch(getAllUsers(result.result));
  }
};
const createUserApi = (body) => async (dispatch) => {
  let result = await postApi("users/create", body);
  if (result) {
    dispatch(getAllUsersApi());
  }
};
const searchUser = (data) => {
  return {
    type: SEARCH_USER,
    payload: data,
  };
};
export { getAllUsersApi, createUserApi, searchUser };
