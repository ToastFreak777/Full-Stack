import { Reducer } from "react";
import { PaginateAction, PaginationType } from "../@types/pagination";

export const reducer: Reducer<PaginationType, PaginateAction> = (
  state,
  action
) => {
  switch (action.type) {
    case ACTIONS.LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
        totalItems: action.payload.length,
      };
    case ACTIONS.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ACTIONS.SET_LIMIT:
      return {
        ...state,
        itemsPerPage: action.payload,
      };

    default:
      throw new Error("No Matching action type");
  }
};

export const ACTIONS = {
  LOAD_POSTS: "LOAD_POSTS",
  SET_LIMIT: "SET_LIMIT",
  SET_PAGE: "SET_PAGE",
};
