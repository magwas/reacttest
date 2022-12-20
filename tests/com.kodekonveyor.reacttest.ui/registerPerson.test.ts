import { describe, expect } from '@jest/globals';
import { AnyAction } from '@reduxjs/toolkit';
import { mock, mockFn } from 'jest-mock-extended';

import * as React from "react";
import { registerPerson } from "../../src/com.kodekonveyor.reacttest.ui/actions/registerPerson";
import { actions } from '../../src/com.kodekonveyor.reacttest.ui/state/appState';
import { Person } from '../../src/com.kodekonveyor.reacttest.ui/state/types/Person';
import { NameInputFormUIStateInitializer } from '../../src/com.kodekonveyor.reacttest.ui/UI/NameInputFormUIStateInitializer';

describe('registerPerson', function () {

  const theEvent = mock<React.FormEvent<Element>>();
  const formState = mock(Person);
  const setState = mockFn<React.Dispatch<React.SetStateAction<Person>>>();
  const dispatch = mockFn<React.Dispatch<AnyAction>>();

  registerPerson(theEvent, formState, setState, dispatch);

  it('prevents automatic redraw of the form', function () {
    expect(theEvent.preventDefault).toHaveBeenCalled();
  });

  it('adds the person from the form to the person list', function () {
    expect(dispatch).toHaveBeenCalledWith(actions.addPerson(formState))
  });

  it('reinitializes the form data', function () {
    expect(setState).toHaveBeenCalledWith(NameInputFormUIStateInitializer);
  });


});