import * as React from "react";
import * as ReactDOM from "react-dom";
import MainUI from "./UI/MainUI"

import { Provider } from 'react-redux'
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
    <MainUI/>
  </Provider>,
  document.getElementById("root")
);
