import { all } from "redux-saga/effects";
import authSagas from "./authSagas";

function* rootSaga() {
  yield all([...authSagas]);
}

export default rootSaga;