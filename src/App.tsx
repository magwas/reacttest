import * as React from "react";
import MainUI from "./com.kodekonveyor.reacttest.ui/UI/MainUI";
import { useSelector, useDispatch } from 'react-redux';
import { MainState } from "./com.kodekonveyor.reacttest.ui/state/types/MainState";
import { InitializeApp } from "./com.kodekonveyor.reacttest.ui/actions/InitializeApp";

export default function App(): React.ReactElement {
  const dispatch = useDispatch();
  const mainState = useSelector((state: MainState)=>state);
  InitializeApp(dispatch,mainState)
  return (<MainUI/>);
}

