
export type Action<T = string> = {
  type: string;
  payload: T;
};
