import * as React from "react";
import { Person } from "../state/types/Person";

interface PersonUIProps {
  person: Person;
}

export function PersonUI(props: PersonUIProps): React.ReactElement {
  return <li>
    {props.person.name}
  </li>;
}
