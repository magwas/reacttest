import { Person } from "../state/types/Person";

export function NameInputFormUIStateInitializer(state:Person): Person {
  return {...state,name:''};
}
