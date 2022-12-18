import { MainState } from "../types/MainState";
import { Person } from "../types/Person";

export function personSelector(count: Number) {
  return function (state: MainState) {
    console.log(count)
    return (state.persons);
  }
}
