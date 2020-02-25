import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { HeadingLabel } from './StyledComponents/common/CommonComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PersonContext from '../Context/PersonsContext';
import { useInput } from '../Hooks/input-hook';
import {
  HeadContent,
  FootContent
} from './StyledComponents/CreatePerson.styles';
import SelectOrg from './SelectOrg';
//Props:{shown:blooean, clear:function()}
const CreatePerson = ({ shown, clear }) => {
  useEffect(() => {
    //run on component mount
    return () => {
      //runs on component unmount
      console.log('...leaving');
      resetEmail();
      resetName();
      resetPhone();
      clear();
    };
    // eslint-disable-next-line
  }, []);//can Add varables to make this instance of useEffect to execute on change of that variable
  const context = useContext(PersonContext);
  const [org, setOrg] = useState();
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: phone, bind: bindPhone, reset: resetPhone } = useInput('');
  const closeModal = () => {
    clear();
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const data = {
      email: [{ value: email }],
      name,
      phone: [{ value: phone }],
      org_id: org
    };
    console.log("Test");
    // context.addPerson({
    //   email: [{ value: email }],
    //   name,
    //   phone: [{ value: phone }],
    //   org_id: org
    // });
    closeModal();
  };

  if (!shown) return <></>;
  return (
    <>
      <Modal show={shown} onHide={closeModal} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header>
            <HeadContent>
              <HeadingLabel className="no-border">Person Creation</HeadingLabel>
              <p
                className="close"
                onClick={_ => {
                  closeModal();
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </p>
            </HeadContent>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                aria-label="email"
                placeholder="Enter email"
                {...bindEmail}
              ></Form.Control>
              <Form.Text className="text-muted">
                We&rsquo;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required={true}
                placeholder="Enter name"
                {...bindName}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone"
                {...bindPhone}
              />
            </Form.Group>
            <SelectOrg setCurrentOrg={setOrg} />
          </Modal.Body>
          <Modal.Footer>
            <FootContent>
              <Button
                variant="outline-dark"
                onClick={_ => {
                  closeModal();
                }}
              >
                Back
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </FootContent>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

CreatePerson.propTypes = {
  shown: PropTypes.any,
  clear: PropTypes.any
};

export default CreatePerson;
