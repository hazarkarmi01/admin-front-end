import { postApi } from "../../utils/apiMethods";
import { LOGIN_SUCCESS } from "./actionTypes";
import { notifications } from '@mantine/notifications';
const handleAuthApi = (body, navigate) => async (dispatch) => {
    try {
        let result = await postApi("users/login", body);
        
        if (result.success) {
            const { token, userId } = result;
            localStorage.setItem("token",token)
            dispatch(handleAuthUser(token, userId));
            navigate('/admin')
        }else {
            notifications.show({
                title: 'Erreur',
                message: 'Email ou mot de passe incorrect',
                color:"red"
              })
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
