import * as React from "react";
import { useSelector } from 'react-redux';
import { personSelector } from "../state/selectors/personSelector";
import { PersonUI } from "./PersonUI";

export function NameListUI(): React.ReactElement {
  const persons = useSelector(personSelector);
  return (
    <li>
      {persons.map(person => (
        <PersonUI person={person}/>
      ))}
    </li>);
}


