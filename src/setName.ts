import { createSlice } from '@reduxjs/toolkit'
import { MainState, Action } from './MainState';

function setTheName(state: MainState, action: Action) {
  state.name = action.payload;
}

function addName(state: MainState, action: Action) {
  state.names.push(action.payload);
}

export const initialState = {
  name: 'Ford Prefect',
  names: ['a']
};

export const appState = createSlice({
  name: 'testApp',
  initialState: initialState,
  reducers: {
    setName: setTheName,
    addName: addName
  },
})

export const actions = appState.actions

