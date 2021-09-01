import { CHANGE_PAGE } from "@store/actions"

const initialState = {
    page: 0, 
    itemsPerPage: 5
}

export const pageReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      case CHANGE_PAGE:
        return {...state,
          page: action.payload.page
        }
      default:
        return state
    }
  }