export interface IPagination {
  page?: number;
  limit?: number;
}

export interface IPaginationResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
