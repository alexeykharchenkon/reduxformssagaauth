import { OPEN_MESSAGE, CLOSE_MESSAGE } from "@store/actions"

const initialState = {
    type: "error",
    text: "",
    isOpen: false
}

export const messageReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      case OPEN_MESSAGE:
        return {
          ...state,
          type: action.payload.message.type,
          text: action.payload.message.text,
          isOpen: true
        }
      case CLOSE_MESSAGE:
        return {
          ...state,
          type: "error",
          text: "",
          isOpen: false
        }
      default:
        return state
    }
  }