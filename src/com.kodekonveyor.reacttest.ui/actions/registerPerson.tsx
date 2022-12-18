import * as React from "react";
import { actions } from "../state/appState";
import { Person } from "../state/types/Person";
import { NameInputFormUIStateInitializer } from "../UI/NameInputFormUIStateInitializer";

export function registerPerson(event: React.FormEvent, formState: Person, setState: React.Dispatch<React.SetStateAction<Person>>, dispatch: React.Dispatch<any>) {
  event.preventDefault();
  dispatch(actions.addPerson(formState));
  setState(NameInputFormUIStateInitializer);

}
