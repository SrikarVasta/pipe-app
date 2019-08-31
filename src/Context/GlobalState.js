import React, { useState, useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PersonsContext from './PersonsContext';
import {
  personReducer,
  ADD_PERSON,
  REMOVE_PERSON,
  LOAD_PERSONS,
  LOAD_MORE_PERSONS,
  ORDER_PERSONS
} from './Reducers';
const API = process.env.REACT_APP_API_URL,
  TOKEN = process.env.REACT_APP_API_TOKEN,
  USER = process.env.REACT_APP_API_USER;
const GlobalState = props => {
  const [personState, dispatch] = useReducer(personReducer, { persons: [] });
  const addPerson = person => {
    dispatch({ type: ADD_PERSON, person: person });
  };

  const removePerson = personId => {
    dispatch({ type: REMOVE_PERSON, personId: personId });
  };
  const loadPersons = async startVal => {
    let newPersons = [];
    const result = await axios(
      `${API}/persons/list?api_token=${TOKEN}&user_id=${USER}&sort=&label=&start=0&type=person&limit=10&start=${startVal}`
    );
    if (startVal && personState.persons && personState.persons.length) {
      newPersons = [
        ...personState.persons,
        ...(result.data && result.data.data)
      ];
    } else {
      newPersons = [
        ...personState.persons,
        ...(result.data && result.data.data)
      ];
    }
    dispatch({ type: LOAD_PERSONS, persons: newPersons });
  };
  const loadMorePersons = persons => {
    dispatch({ type: LOAD_MORE_PERSONS, persons });
  };
  const orderPersons = persons => {
    dispatch({ type: ORDER_PERSONS, persons });
  };
  return (
    <PersonsContext.Provider
      value={{
        persons: personState.persons,
        addPerson,
        removePerson,
        loadPersons,
        loadMorePersons,
        orderPersons
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};
GlobalState.propTypes = {
  children: PropTypes.any
};
export default GlobalState;
