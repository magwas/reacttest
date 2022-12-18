import * as React from "react";
import * as ReactDOM from "react-dom";
import MainUI from "./com.kodekonveyor.reacttest.ui/UI/MainUI"
import { Provider } from 'react-redux'
import { store } from "./com.kodekonveyor.reacttest.ui/state/appState";
import App from "./App";


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
