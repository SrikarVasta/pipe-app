import React from 'react';

export default React.createContext({
  data: [],
  addPerson: person => person,
  removePerson: person => person,
  loadPersons: persons => persons,
  loadMorePersons: persons => persons,
  orderPersons: persons => persons
});
