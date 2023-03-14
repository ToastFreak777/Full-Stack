import React from "react";
import { PaginationType } from "../@types/pagination";

const initialState: PaginationType = {
  posts: [],
  currentPage: 0,
  itemsPerPage: 0,
  totalItems: 0,
};

export const PaginationContext = React.createContext(initialState);
