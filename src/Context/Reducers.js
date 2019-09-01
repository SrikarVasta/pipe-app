export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const LOAD_PERSONS = 'LOAD_PERSONS';
export const LOAD_MORE_PERSONS = 'LOAD_PERSONS';
export const ORDER_PERSONS = 'ORDER_PERSONS';

const addPerson = (person, state) => {
  const updatedPersonList = [...state.persons];
  updatedPersonList.unshift(person);
  return { ...state, persons: updatedPersonList };
};

const loadPersons = (persons, startVal, loadMore, state) => {
  return { ...state, persons: persons, startVal, loadMore };
};

const loadMorePersons = (persons, startVal, loadMore, state) => {
  return { ...state, persons: persons, startVal, loadMore };
};

const orderPersons = (persons, state) => {
  return { ...state, persons: persons };
};

const removePerson = (personId, state) => {
  console.log('Removing person with id: ' + personId);
  const updatedPersonList = [...state.persons];
  return {
    ...state,
    persons: updatedPersonList.filter(p => p.id !== personId)
  };
};

export const personReducer = (state, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return addPerson(action.person, state);
    case REMOVE_PERSON:
      return removePerson(action.personId, state);
    case LOAD_PERSONS:
      return loadPersons(
        action.persons,
        action.startVal,
        action.loadMore,
        state
      );
    case LOAD_MORE_PERSONS:
      return loadMorePersons(action.persons, state);
    case ORDER_PERSONS:
      return orderPersons(
        action.persons,
        action.startVal,
        action.loadMore,
        state
      );
    default:
      return state;
  }
};
