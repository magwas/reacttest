import * as React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerPerson } from "../actions/registerPerson";
import { Person } from "../state/types/Person";
import { NameInputFormUIStateInitializer } from "./NameInputFormUIStateInitializer";

export function NameInputFormUI(): React.ReactElement {
  const dispatch = useDispatch();
  const [state, setState] = useState(NameInputFormUIStateInitializer(new Person()));
  return (
    <form onSubmit={event => registerPerson(event, state, setState, dispatch)}>
      <label>Enter your name:
        <input
          type="text"
          value={state.name}
          onChange={(e) => setState({ name: e.target.value })} />
      </label>
      <input type="submit" />
    </form>
  );
}


