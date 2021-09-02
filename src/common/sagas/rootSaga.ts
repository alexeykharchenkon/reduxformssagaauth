import { all } from "redux-saga/effects";
import { authSagas } from "./authSagas";
import { postSagas } from "./postSagas";

function* rootSaga() {
  yield all([...authSagas, ...postSagas]);
}

export default rootSaga;