import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { authReducer, pageReducer, postsReducer } from "./index";

export const reducer = combineReducers({
    form: formReducer,
    postsState: postsReducer,
    userState: authReducer,
    pageState: pageReducer
});