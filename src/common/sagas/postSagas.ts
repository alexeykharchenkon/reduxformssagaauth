import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { ADD_POST, DELETE_POST, LOAD_POSTS, UPDATE_POST } from "@store/actions";
import { loadPostsStarted, loadPostsFailure, loadPostsSuccess, addPostFailure, addPostSuccess, deletePostFailure, deletePostSuccess, updatePostFailure, updatePostSuccess } from "@store/actionCreators/postsActions";

const postUrl = "https://localhost:44370/api/Posts";
const headers =  { 
    headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
}

function* watchLoad() { yield takeEvery(LOAD_POSTS, loadAsync)}
function* watchAdd() { yield takeEvery(ADD_POST, addAsync)}
function* watchDelete() { yield takeEvery(DELETE_POST, deleteAsync)}
function* watchUpdate() { yield takeEvery(UPDATE_POST, updateAsync)}

function* loadAsync({ payload }: any) : any {
    yield put(loadPostsStarted());
    
    try {
        const posts = yield call(() => axios.get(postUrl).then(res => res.data));
        yield put(loadPostsSuccess(posts));
      } catch (error) {
          yield put(loadPostsFailure(error));
      }
}
function* addAsync({ payload }: any) : any {
    try {
        const post = yield call(() => 
            axios.post(postUrl, payload.post, headers).then(res => res.data));

        yield put(addPostSuccess(post));
      } catch (error) {
          yield put(addPostFailure(error));
      }
}
function* deleteAsync({ payload }: any) : any {
    try {
        const id = yield call(() => axios.delete(postUrl + `/${payload.id}`, headers)
            .then(res => res.data));

        yield put(deletePostSuccess(id));
      } catch (error) {
          yield put(deletePostFailure(error));
      }
}
function* updateAsync({ payload }: any) : any {
    try {
        const post = yield call(() => 
            axios.put(postUrl + `/${payload.post.id}`, payload.post, headers)
                .then(res => res.data));

        yield put(updatePostSuccess(post));
      } catch (error) {
          yield put(updatePostFailure(error));
      }
}


export const postSagas = [
    watchLoad(),
    watchUpdate(),
    watchAdd(),
    watchDelete(),
];