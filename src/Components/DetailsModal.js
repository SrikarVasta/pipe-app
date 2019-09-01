import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { HeadingLabel } from './StyledComponents/common/CommonComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PersonContext from '../Context/PersonsContext';
import {
  Content,
  DetailsContainer,
  Phone,
  HeadContent,
  FootContent,
  ImageContainer,
  Title,
  Muted,
  Name
} from './StyledComponents/DetailsModal.styles';
import { fetchPerson } from '../Services/services';

const DetailsModal = ({ clear, modalContent }) => {
  let [loadedData, setLoadedData] = useState();
  useEffect(() => {
    if (modalContent.id) {
      fetchPerson(modalContent.id).then(result => {
        setLoadedData(result);
      });
    } else {
      setLoadedData(undefined);
    }
  }, [modalContent.id]);
  const context = useContext(PersonContext);
  return (
    <>
      <Modal show={!!modalContent} onHide={clear} centered>
        <Modal.Header>
          <HeadContent>
            <HeadingLabel className="no-border">
              Person Information
            </HeadingLabel>
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
          {loadedData ? (
            <Content className="content">
              <div className="name-block">
                <ImageContainer>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg" />
                </ImageContainer>
                <Name>{loadedData.name}</Name>
                <Phone>
                  {'+ '}
                  {loadedData.phone &&
                    loadedData.phone.length &&
                    loadedData.phone[0].value}
                </Phone>
              </div>
              <DetailsContainer>
                <Row>
                  <Col xs={3}>
                    <Title>Email:</Title>
                  </Col>
                  <Col xs={9}>
                    <Muted>
                      {loadedData.email.length &&
                        loadedData.email[0] &&
                        loadedData.email[0].value}
                    </Muted>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <Title>Organization:</Title>
                  </Col>
                  <Col xs={9}>
                    <Muted>{loadedData.org_name}</Muted>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <Title>Assistant:</Title>
                  </Col>
                  <Col xs={9}>
                    <Muted>{loadedData.person && loadedData.person.name}</Muted>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <Title>Groups:</Title>
                  </Col>
                  <Col xs={9}>
                    <Muted>{loadedData.group}</Muted>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <Title>Location:</Title>
                  </Col>
                  <Col xs={9}>
                    <Muted>
                      {loadedData.org_id && loadedData.org_id.address}
                    </Muted>
                  </Col>
                </Row>
              </DetailsContainer>
            </Content>
          ) : (
            <Content className="content loading">Loading...</Content>
          )}
        </Modal.Body>
        <Modal.Footer>
          <FootContent>
            <Button
              variant="danger"
              onClick={() => {
                context.removePerson(loadedData.id);
                clear();
              }}
            >
              Delete
            </Button>
            <Button
              variant="outline-dark"
              onClick={_ => {
                clear();
              }}
            >
              Back
            </Button>
          </FootContent>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DetailsModal.propTypes = {
  clear: PropTypes.any,
  modalContent: PropTypes.any
};

export default DetailsModal;
