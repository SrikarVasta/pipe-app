import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchComponent = ({ context }) => {
  console.log('--------------------');
  console.log(context);
  console.log('--------------------');
  const handleChange = e => {
    console.log('Changing....');
    console.log(e.target.value);
  };
  return (
    <>
      <Form.Control
        type="text"
        className="search"
        placeholder="Search "
        onChange={e => {
          handleChange(e);
        }}
      />
    </>
  );
};
SearchComponent.propTypes = {
  context: PropTypes.any
};

export default SearchComponent;
