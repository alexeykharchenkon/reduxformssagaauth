import { SET_FILTER, SHOW_ALL } from "@store/actions"

export const filterReducer = (state = SHOW_ALL, action: any) => {
    switch (action.type) {
      case SET_FILTER:
        return action.filter
      default:
        return state
    }
  }