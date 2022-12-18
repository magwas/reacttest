import { MainState } from '../types/MainState';
import { Action } from "../../../Action";
import { Person } from "../types/Person";

export function addPerson(state: MainState, action: Action<Person>) {
  state.persons.push(action.payload);
}
