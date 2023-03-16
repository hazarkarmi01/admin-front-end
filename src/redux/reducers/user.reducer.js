import { GET_ALL_USERS, SEARCH_USER } from "../actions/actionTypes";

const usersInitState = {
  baseList: [],
  editList: [],
};

const UserReducer = (state = usersInitState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, baseList: payload, editList: payload };
    case SEARCH_USER:
      return {
        ...state,
        editList:
          payload == ""
            ? state.baseList
            : state.baseList.filter((elm) => elm.firstName.includes(payload)),
      };

    default:
      return state;
  }
};
export default UserReducer;
