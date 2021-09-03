import { Post } from "@common/types";
import { ADD_POST, LOAD_POSTS_STARTED, DELETE_POST, UPDATE_POST, EDIT_POST, LOAD_POSTS, ADD_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POSTS_SUCCESS, UPDATE_POST_FAILURE, UPDATE_POST_SUCCESS, GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS } from "@store/actions";

const loadPosts = () => ({type: LOAD_POSTS});
const loadPostsSuccess = (posts: Post[]) => ({type: LOAD_POSTS_SUCCESS, payload: {posts}});
const loadPostsStarted = () => ({type: LOAD_POSTS_STARTED});
const loadPostsFailure = (error: any) => ({type: LOAD_POSTS_FAILURE, payload: {error}});

const addPost = (post: Post) => ({type: ADD_POST, payload: {post}});
const addPostSuccess = (post: Post) => ({type: ADD_POST_SUCCESS, payload: {post}});
const addPostFailure = (error: any) => ({type: ADD_POST, payload: {error}});

const updatePost = (post: Post) => ({type: UPDATE_POST, payload: {post}});
const updatePostSuccess = (post: Post) => ({type: UPDATE_POST_SUCCESS, payload: {post}});
const updatePostFailure = (error: any) => ({type: UPDATE_POST_FAILURE, payload: {error}});

const deletePost = (id: string) => ({type: DELETE_POST, payload: {id}});
const deletePostSuccess = (id: string) => ({type: DELETE_POST_SUCCESS, payload: {id}});
const deletePostFailure = (error: any) => ({type: DELETE_POST_FAILURE, payload: {error}});

const editPost = (id: string) => ({type: EDIT_POST, payload: {id}});

const getPost = (id: string) => ({type: GET_POST, payload: {id}});
const getPostSuccess = (post: Post) => ({type: GET_POST_SUCCESS, payload: {post}});
const getPostFailure = (error: any) => ({type: GET_POST_FAILURE, payload: {error}});

export {
    loadPosts,
    loadPostsFailure,
    loadPostsSuccess,
    addPost,
    addPostFailure,
    addPostSuccess,
    updatePost,
    updatePostFailure,
    updatePostSuccess,
    deletePost,
    deletePostFailure,
    deletePostSuccess,
    editPost,
    loadPostsStarted,
    getPost,
    getPostFailure,
    getPostSuccess
}