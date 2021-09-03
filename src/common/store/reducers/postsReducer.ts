import { GET_POST, LOAD_POSTS_STARTED, ADD_POST_SUCCESS, UPDATE_POST_SUCCESS, DELETE_POST_SUCCESS, EDIT_POST, LOAD_POSTS_SUCCESS } from "@store/actions";
import { Post } from "@common/types";

const initialState = {
    posts: [/*{
        id: '100',
        title: 'First Post',
        text: 'First Post Text'
    }*/],
    activePost: undefined,
    isLoaded: false,
    currentPost: undefined
}

export const postsReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case GET_POST:
            return {
                ...state,
                currentPost: state.posts.find((p: Post) => p.id === action.payload.id)
            }
        case LOAD_POSTS_STARTED: return { ...state, isLoaded: true }
        case LOAD_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts,
                isLoaded: false
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, {...action.payload.post}]
            }
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                activePost: undefined,
                currentPost: action.payload.post,
                posts: state.posts?.map((post: Post) => (
                    post.id === action.payload.post.id ?
                        ({
                            ...post,
                            ...action.payload.post
                        })
                        : (post)
                    ))
                }
        case DELETE_POST_SUCCESS:
            return {
                 ...state,
                posts: state.posts.filter((p: Post) => p.id !== action.payload.id)
            }
        case EDIT_POST:
            console.log("edit")
            return {
                ...state,
                activePost: state.posts.find((p: Post) => p.id === action.payload.id)
            }
        default:
            return state;
    }
}