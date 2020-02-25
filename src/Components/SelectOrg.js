import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { fetchOrganizations } from '../Services/services';

const SelectOrg = ({ setCurrentOrg }) => {
  const handleChange = e => {
    setCurrentOrg(e.target.value);
    console.log(e.target.value);
  };
  const [orgs, setOrgs] = useState();
  useEffect(() => {
    fetchOrganizations().then(results => {
      const orgnisationList =
        results &&
        results.map(org => {
          return {
            name: org.name,
            id: org.id
          };
        });
      setOrgs(orgnisationList);
    });
    return () => {
      setCurrentOrg(undefined);
      setOrgs(undefined);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Form.Group>
        <Form.Label>Organization</Form.Label>
        <Form.Control as="select" disabled={!orgs} onChange={handleChange}>
          <option value={undefined}></option>
          {orgs &&
            orgs.map(org => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};
SelectOrg.propTypes = {
  setCurrentOrg: PropTypes.any
};

export default SelectOrg;
