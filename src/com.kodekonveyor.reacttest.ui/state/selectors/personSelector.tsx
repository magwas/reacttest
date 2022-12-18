import { MainState } from "../types/MainState";

export function personSelector(count: number) {
  return function (state: MainState) {
    console.log(count)
    return (state.persons);
  }
}
