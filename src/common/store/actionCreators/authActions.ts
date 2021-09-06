import { USER_LOGOUT_SUCCESS, USER_LOGIN_FAILED, GET_PROFILE, LOGIN_FORM_CHANGE, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER, USER_REGISTER_SUCCESS } from "@store/actions/index";
import { User } from "@common/types/index";

const login = (user: User) => ({type: USER_LOGIN, payload: {user} });
const loginSuccess = (user: User) => ({ type: USER_LOGIN_SUCCESS, payload: {user} });
const loginFailure = (error: any) => ({ type: USER_LOGIN_FAILED, payload:  {error} });

const register = (user: User) => ({ type: USER_REGISTER, payload: {user} });
const registerSuccess = (user: User) => ({ type: USER_REGISTER_SUCCESS, payload: {user} });

const getProfile = () => ({type: GET_PROFILE});

const logout = () => ({ type: USER_LOGOUT });
const logoutSuccess = () => ({ type: USER_LOGOUT_SUCCESS });

const loginFormChange = (formState: any) => ({ type: LOGIN_FORM_CHANGE, payload: {formState} });

const getAuthor = (user: User) => ({type: USER_LOGIN, payload: {user} });
const getAuthorSuccess = (user: User) => ({ type: USER_LOGIN_SUCCESS, payload: {user} });

export {
    login,
    loginFailure,
    loginSuccess,
    register,
    registerSuccess,
    getProfile,
    logout,
    loginFormChange,
    logoutSuccess,
    getAuthor,
    getAuthorSuccess
}