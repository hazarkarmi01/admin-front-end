import { deleteApi, getApi, postApi } from "../../utils/apiMethods";
import { GET_CATEGORY_LIST, SET_SELECTED_CATEGORY } from "./actionTypes";

const createNewCategoryApi = (body, token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "access-token": token
      }
    };
    const result = await postApi("category/create", body, config);
    if (result) {
      console.log("Result", result);
      dispatch(getCategoryList(token));
    }
  } catch (error) {}
};
const getCategoryList = (token) => async (disptach) => {
  try {
    const config = {
      headers: {
        "access-token": token
      }
    };
    const response = await getApi("category", config);
    // console.log("Result", response);
    if (response) {
      // console.log("Result", response);
      disptach({
        type: GET_CATEGORY_LIST,
        payload: response.result
      });
    }
  } catch (error) {}
};
const deleteCategoryApi = (id, token) => async (disptach) => {
  try {
    const config = {
      headers: {
        "access-token": token
      }
    };
    const response = await deleteApi(`category/${id}`, config);
    if (response.success) {
      disptach(getCategoryList(token));
    }
  } catch (error) {}
};
const setSelectedCateg = (data) => {
  return {
    type: SET_SELECTED_CATEGORY,
    payload: data
  };
};
export const createNewSubCatgory = (body, token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "access-token": token
      }
    };
    let result = await postApi(`category/sub/create`, body, config);
    if (result) {
      dispatch(getCategoryList(token));
      dispatch(updateSelectedCategory(body.parentCategory, token));
    }
  } catch (error) {}
};
export const updateSelectedCategory = (categId, token) => async (disptach) => {
  try {
    const config = {
      headers: {
        "access-token": token
      }
    };
    let result = await getApi(`category/${categId}`, config);
    if (result.success) {
      disptach({
        type: SET_SELECTED_CATEGORY,
        payload: result.result
      });
    }
  } catch (error) {}
};
const deleteSubCategory = (categId, parentId, token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "access-token": token
      }
    };
    let result = await deleteApi(`category/sub/${categId}`, config);
    if (result) {
      dispatch(getCategoryList(token));
      dispatch(updateSelectedCategory(parentId, token));
    }
  } catch (error) {}
};
export {
  createNewCategoryApi,
  getCategoryList,
  deleteCategoryApi,
  setSelectedCateg,
  deleteSubCategory
};
