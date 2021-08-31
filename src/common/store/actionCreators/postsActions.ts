import { Post } from "@common/types";
import { ADD_POST, DELETE_POST, UPDATE_POST, EDIT_POST, LOAD_POSTS } from "@store/actions";

export const load = () => ({type: LOAD_POSTS})

export const addPost = (post: Post) => ({type: ADD_POST, payload: post});
export const updatePost = (post: Post) => ({type: UPDATE_POST, payload: post});
export const editPost = (id: string) => ({type: EDIT_POST, payload: id});
export const deletePost = (id: string) => ({type: DELETE_POST, payload: id});