import { LOGIN_FORM_CHANGE, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER, USER_REGISTER_SUCCESS } from "@store/actions/index";
import { User } from "@common/types/index";

export const login = (user: User) => { 
    return { type: USER_LOGIN, payload: { user } }
}
export const loginSuccess = (user: User) => {
    return { type: USER_LOGIN_SUCCESS, payload: { user } }
}

export const register = (user: User) => {
    return { type: USER_REGISTER, payload: { user }}
}
export const registerSuccess = (user: User) => {
    return { type: USER_REGISTER_SUCCESS, payload: { user } }
}

export const logout = () => ({ type: USER_LOGOUT });

export const loginFormChange = (formState: any) => 
({ type: LOGIN_FORM_CHANGE, payload: {formState} });