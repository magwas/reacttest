import { configureStore } from '@reduxjs/toolkit';
import { appState } from './setName';

export default configureStore({
  reducer: appState.reducer,
});
