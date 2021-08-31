import { call, put, takeEvery } from "redux-saga/effects";
import { loginSuccess, registerSuccess } from "@store/actionCreators/authActions";
import { USER_LOGIN, USER_REGISTER } from "@store/actions";

function* watchLogin() {
    yield takeEvery(USER_LOGIN, login);
}

function* login({ payload }: any) : any {
  yield put(loginSuccess(payload.user));
}

function* watchRegister() {
  yield takeEvery(USER_REGISTER, register);
}

function* register({ payload }: any) : any {
  yield put(registerSuccess(payload.user));
}

export default [
    watchLogin(),
    watchRegister(),
  ];
  