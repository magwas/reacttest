import * as React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ReactDOM from "react-dom";
import { actions, appState, initialState } from "../setName";
import store from "../store";
import { MainState } from "../MainState";

type MainUIState = {
  name: string;
};

type PropsType = {
  dispatch: React.Dispatch<any>,
  state: MainUIState,
  setstate: React.Dispatch<any>
}

type MainUIProps = {};

function handleSubmit(e: React.FormEvent, formState: MainUIState, dispatch: React.Dispatch<any>) {
  e.preventDefault()
  console.log("handleSubmit")
  dispatch(actions.setName(formState.name));
  console.log("handleSubmit 2")
  dispatch(actions.addName(formState.name));
  console.log("handleSubmit 3")

}

function selectNames(state: MainState) {
  console.log("selectNames");
  console.log(state);
  return(state.names)
}

function NameList(): React.ReactElement {
  const names = useSelector(selectNames)
  console.log(names)
  console.log('llll')

  return (
    <li>
      {names.map(name => (
        <li>
          {name}
        </li>
      ))}
    </li>)
}

function NameInputForm(): React.ReactElement {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: appState.getInitialState().name })
  return (
    <form onSubmit={e => handleSubmit(e, state, dispatch)}>
      <label>Enter your name:
        <input
          type="text"
          value={state.name}
          onChange={(e) => setState({ name: e.target.value })}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default function MainUI(): React.ReactElement {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: initialState.name })
  return (
    <div>
      <h1>Hello, I am testing react</h1>
      <NameInputForm />
      <NameList />
    </div>
  );
}

