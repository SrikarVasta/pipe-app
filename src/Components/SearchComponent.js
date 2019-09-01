import React, { useEffect, useState } from 'react';
import useDebounce from '../Hooks/debounce-hook';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchComponent = ({ context }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm.length === 0) {
      context.loadPersons(0);
    }
    if (debouncedSearchTerm && debouncedSearchTerm.length > 2) {
      setIsSearching(true);
      context.loadPersonsSearch(debouncedSearchTerm).then(results => {
        setIsSearching(false);
      });
    }
    // eslint-disable-next-line
  }, [debouncedSearchTerm]);
  return (
    <>
      {isSearching && <div>Searching ...</div>}
      <Form.Control
        type="text"
        className="search"
        placeholder="Search "
        onChange={e => setSearchTerm(e.target.value)}
      />
    </>
  );
};
SearchComponent.propTypes = {
  context: PropTypes.any
};

export default SearchComponent;
