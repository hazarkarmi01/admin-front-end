import { postApi } from "../../utils/apiMethods";
import { LOGIN_SUCCESS } from "./actionTypes";

const handleAuthApi = (body, navigate) => async (dispatch) => {
    try {
        let result = await postApi("users/login", body);
        
        if (result.success) {
            const { token, userId } = result;
            localStorage.setItem("token",token)
            dispatch(handleAuthUser(token, userId));
            navigate('/admin')
        }
    } catch (error) { }
};

const handleAuthUser = (token, userId) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token: token,
            user: userId
        }
    };
};
export { handleAuthApi };
