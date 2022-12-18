import { MainState } from "../types/MainState";
import { Person } from "../types/Person";

export function personSelector(state: MainState): Person[] {
  return (state.persons);
}
