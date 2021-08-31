import { CHANGE_PAGE } from "@store/actions";

export const changePage = (page: any) => ({ type: CHANGE_PAGE, payload: {page} })