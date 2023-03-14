export interface PaginationType {
  posts: [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface PaginateAction {
  type: string;
  payload: any;
}
