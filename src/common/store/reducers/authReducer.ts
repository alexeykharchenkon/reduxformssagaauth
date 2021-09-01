import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS, LOGIN_FORM_CHANGE } from "@store/actions/index";
import { LOGIN_FORM_ACTIVE, USER_FORM_ACTIVE } from "@common/types/states";

const initialAuthState = {
    user: null,
    isLogged: false,
    loginFormState: LOGIN_FORM_ACTIVE,
    message: "",
    type: "success"
}

export const authReducer = (state: any = initialAuthState, action: any) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
          return {
            ...state, 
            user: action.payload.user, 
            isLogged: true,
            loginFormState: USER_FORM_ACTIVE,
            message: "Login Success",
            type: "success"
          };
        case USER_LOGIN_FAILED:
          return {
            ...state, 
            user: null, 
            isLogged: false,
            loginFormState: LOGIN_FORM_ACTIVE,
            message: action.payload.error,
            type: "error"
          };
        case USER_REGISTER_SUCCESS:
          return {
            ...state, 
            user: action.payload.user, 
            isLogged: true,
            loginFormState: USER_FORM_ACTIVE,
            message: "Register Success",
            type: "success"
          };
        case USER_LOGOUT:
          return {
            ...state, 
            user: null, 
            isLogged: false,
            loginFormState: LOGIN_FORM_ACTIVE,
            message: "Logout Success",
            type: "success"
          };
        case LOGIN_FORM_CHANGE:
            return {
              ...state, 
              loginFormState: action.payload.formState
            };
        default: 
          return state;  
    }
}