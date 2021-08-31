import { ADD_POST, UPDATE_POST, DELETE_POST, EDIT_POST } from "@store/actions";
import { Post } from "@common/types";

const initialState = {
    posts: [{
        id: '100',
        title: 'First Post',
        text: 'First Post Text'
    }],
    activePost: undefined
}

export const postsReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: action.payload.id,
                    title: action.payload.title,
                    text: action.payload.text
                }]
            }
        case UPDATE_POST:
            return {
                ...state,
                activePost: undefined,
                posts: state.posts?.map((post: Post) => (
                    post.id === action.payload.id ?
                        ({
                            id: action.payload.id,
                            title: action.payload.title,
                            text: action.payload.text 
                        })
                        : (post)
                    ))
                }
        case DELETE_POST:
            return {
                 ...state,
                posts: state.posts.filter((p: Post) => p.id !== action.payload)
            }

        case EDIT_POST:
            return {
                ...state,
                activePost: state.posts.find((p: Post) => p.id === action.payload)
            }
        default:
            return state;
    }
}