import { getApi, postApi, updateApi } from "../../utils/apiMethods";
import { GET_ALL_USERS, SEARCH_USER, SET_SELECTED_USER } from "./actionTypes";

const getAllUsers = (data) => {
  return {
    type: GET_ALL_USERS,
    payload: data
  };
};

const getAllUsersApi = (token) => async (dispatch) => {
  const config = {
    headers: {
      "access-token": token
    }
  };
  const result = await getApi("users", config);
  //console.log("Result", result);
  if (result && result.success) {
    dispatch(getAllUsers(result.result));
  }
};
const createUserApi = (body, token) => async (dispatch) => {
  let result = await postApi("users/create", body);
  if (result) {
    dispatch(getAllUsersApi(token));
  }
};
const updateUserApi = (userId, body, token) => async (dispatch) => {
  const config = {
    headers: {
      "access-token": token
    }
  };
  let result = await updateApi("users/admin/update/" + userId, body, config);
  if (result) {
    dispatch(getAllUsersApi(token));
  }
};
const deleteUserApi = (userId, token) => async (dispatch) => {
  const config = {
    headers: {
      "access-token": token
    }
  };
  let result = await updateApi(
    "users/admin/update/" + userId,
    { isDeleted: true },
    config
  );
  if (result) {
    dispatch(getAllUsersApi(token));
  }
};
const searchUser = (data) => {
  return {
    type: SEARCH_USER,
    payload: data
  };
};
const setSelectedUser = (data) => {
  return {
    type: SET_SELECTED_USER,
    payload: data
  }
}
export { getAllUsersApi, createUserApi, searchUser, updateUserApi, deleteUserApi, setSelectedUser };
