import { call, put, takeEvery } from "redux-saga/effects";
import { loginSuccess, registerSuccess, loginFailure, logoutSuccess } from "@store/actionCreators/authActions";
import { USER_LOGIN, USER_REGISTER, GET_PROFILE } from "@store/actions";
import axios from "axios";

const authUrl = "https://localhost:44370/api/Users";

function* watchLogin() { yield takeEvery(USER_LOGIN, loginAsync)}
function* watchRegister() { yield takeEvery(USER_REGISTER, registerAsync)}
function* watchLogout() { yield takeEvery(USER_REGISTER, logout)}
function* watchGetProfile() { yield takeEvery(GET_PROFILE, getProfileAsync)}

function* loginAsync({ payload }: any) : any {
  try {
    const data = yield call(() =>
     axios.post(authUrl + "/login", {
        login: payload.user.login,
        password: payload.user.password
      }).then(res => res.data)
    );

    if(data.error) yield put(loginFailure(data.error));
    else{
      localStorage.setItem("token", data.encodedJwt);
      yield put(loginSuccess(data.user));
    } 
  } catch (error) {}
 // yield put(loginSuccess(payload.user));
}

function* registerAsync({ payload }: any) : any {
 // yield put(registerSuccess(payload.user));
  try {
    const data = yield call(() =>
    axios.post(authUrl + "/register", {
        login: payload.user.login,
        password: payload.user.password
      }).then(res => res.data)
    );

    localStorage.setItem("token", data.encodedJwt);
    
    yield put(registerSuccess(data.user));
  } catch (error) {
    //  yield put(loginFailure(error));
  }
}

function* getProfileAsync() : any {
  const token = localStorage.token;
 // const user = {id: "1", login: "User1", password: "Password"}
 // yield put(loginSuccess(user));

  try {
    const data = yield call(() =>
    axios.get(authUrl + "/loginJwt", 
      {
        headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + token
        }
      }).then(res => res.data)
    );
    
    yield put(loginSuccess(data.user));
  } catch (error) {
    //  yield put(loginFailure(error));
  }
}

function* logout({ payload }: any) : any {
  localStorage.removeItem("token");
    yield put(logoutSuccess());
}

export const authSagas = [
    watchLogin(),
    watchRegister(),
    watchGetProfile(),
    watchLogout(), 
  ];
  