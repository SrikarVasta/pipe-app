import React, { useContext } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { HeadingLabel } from './common/CommonComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PersonContext from '../Context/PersonsContext';

const Content = styled.div`
  &.content {
    min-height: 450px;
    display: flex;
    justify-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .name-block {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 375px;
      border-bottom: 1px solid #dee2e6;
      border-bottom: 2px solid #dee2e6;
    }
  }
  &.head-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  .close {
    cursor: pointer;
    padding: 17px;
    font-size: 18px;
  }
`;
const FootContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f5f7fb;
`;
const CreatePerson = ({ shown, clear }) => {
  const context = useContext(PersonContext);
  const submitted = event => {
    event.preventDefault();
    console.log(event);
  };
  if (!shown) return <></>;
  return (
    <>
      <Modal show={shown} onHide={clear} centered>
        <Form onSubmit={submitted}>
          <Modal.Header>
            <HeadContent>
              <HeadingLabel className="no-border">Person Creation</HeadingLabel>
              <p
                className="close"
                onClick={_ => {
                  clear();
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </p>
            </HeadContent>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We&rsquo;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" />
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group controlId="formOrganisation">
              <Form.Label>Org</Form.Label>
              <Form.Control type="text" placeholder="Enter Org" />
              <Form.Text></Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <FootContent>
              <Button
                variant="outline-dark"
                onClick={_ => {
                  clear();
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
