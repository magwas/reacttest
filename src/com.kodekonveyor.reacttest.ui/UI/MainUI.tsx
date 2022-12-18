import * as React from "react";
import { NameListUI } from "./NameListUI";
import { NameInputFormUI } from "./NameInputFormUI";

export default function MainUI(): React.ReactElement {
  return (
    <div>
      <h1>Hello, I am testing react</h1>
      <NameInputFormUI />
      <NameListUI />
    </div>
  );
}

