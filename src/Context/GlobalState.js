import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import PersonsContext from './PersonsContext';
import { fetchPersons, searchCharacters } from '../Services/services';
import {
  personReducer,
  ADD_PERSON,
  REMOVE_PERSON,
  LOAD_PERSONS,
  LOAD_MORE_PERSONS,
  ORDER_PERSONS
} from './Reducers';
const GlobalState = props => {
  const [personState, dispatch] = useReducer(personReducer, { persons: [] });
  const addPerson = person => {
    dispatch({ type: ADD_PERSON, person: person });
  };

  const removePerson = personId => {
    dispatch({ type: REMOVE_PERSON, personId: personId });
  };
  const loadPersons = async (startVal = 0) => {
    let newPersons = [];
    fetchPersons(startVal).then(results => {
      let { data, more_items_in_collection } = results;
      if (startVal && personState.persons && personState.persons.length) {
        newPersons = [...personState.persons, ...data];
      } else {
        newPersons = [...data];
      }
      dispatch({
        type: LOAD_PERSONS,
        persons: newPersons,
        startVal,
        loadMore: more_items_in_collection
      });
    });
  };
  const loadPersonsSearch = async (key, startVal = 0) => {
    let newPersons = [];
    searchCharacters(key, startVal).then(results => {
      let { data, more_items_in_collection } = results;
      newPersons = data ? [...data] : [];
      dispatch({
        type: LOAD_MORE_PERSONS,
        persons: newPersons,
        startVal,
        loadMore: more_items_in_collection
      });
    });
  };
  const orderPersons = persons => {
    dispatch({ type: ORDER_PERSONS, persons });
  };
  return (
    <PersonsContext.Provider
      value={{
        persons: personState.persons,
        startVal: personState.startVal,
        loadMore: personState.loadMore,
        addPerson,
        removePerson,
        loadPersons,
        loadPersonsSearch,
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
