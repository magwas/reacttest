import { createSlice, configureStore } from '@reduxjs/toolkit'
import { initialState } from './initialState';
import { addPerson } from './reducers/addPerson';

const appState = createSlice({
  name: 'testApp',
  initialState: initialState,
  reducers: {
    addPerson: addPerson
  },
})

export const store = configureStore({
  reducer: appState.reducer,
});

export const actions = appState.actions

