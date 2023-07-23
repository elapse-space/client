export type BasicResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};
