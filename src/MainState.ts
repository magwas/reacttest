import * as React from "react";

export type MainState = {
  name: string;
  names: Array<string>
};

type PayLoad = {
  event: React.ChangeEvent<HTMLInputElement>;
  setState: React.Dispatch<any>;
};
export type Action = {
  type: string;
  payload: string;
};
