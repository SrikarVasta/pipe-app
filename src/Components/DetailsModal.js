import React, { useContext } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
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
const Name = styled.h5`
  font-weight: 900;
  font-size: 17px;
`;
const DetailsContainer = styled.div`
  width: 75%;
  padding: 20px 0px;
  .row {
    padding: 10px 0;
    align-items: center;
  }
`;
const Phone = styled.h5`
  font-weight: 900;
  font-size: 19px;
  color: #08a742;
  padding-bottom: 5px;
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
  justify-content: flex-end;
  width: 100%;
  background-color: #f5f7fb;
`;
const ImageContainer = styled.div`
  height: 105px;
  width: 105px;
  margin-bottom: 25px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
  }
`;
const Title = styled.h5`
  font-size: 12px;
  font-weight: 900;
  text-align: right;
  width: 89px;
  margin: 0;
`;
const Muted = styled.h5`
  color: grey;
  font-size: 12px;
  font-weight: 900;
  text-align: left;
  margin: 0;
  padding-left: 5%;
`;
const DetailsModal = ({ clear, modalContent }) => {
  console.log(modalContent);
  const context = useContext(PersonContext);
  if (!modalContent) return <></>;
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
          <Content className="content">
            <div className="name-block">
              <ImageContainer>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg" />
              </ImageContainer>
              <Name>{modalContent.name}</Name>
              <Phone>
                {'+ '}
                {modalContent.phone &&
                  modalContent.phone.length &&
                  modalContent.phone[0].value}
              </Phone>
            </div>
            <DetailsContainer>
              <Row>
                <Col xs={3}>
                  <Title>Email:</Title>
                </Col>
                <Col xs={9}>
                  <Muted>
                    {modalContent.email.length &&
                      modalContent.email[0] &&
                      modalContent.email[0].value}
                  </Muted>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Title>Organization:</Title>
                </Col>
                <Col xs={9}>
                  <Muted>{modalContent.org_name}</Muted>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Title>Assistant:</Title>
                </Col>
                <Col xs={9}>
                  <Muted>
                    {modalContent.person && modalContent.person.name}
                  </Muted>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Title>Groups:</Title>
                </Col>
                <Col xs={9}>
                  <Muted>{modalContent.group}</Muted>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Title>Location:</Title>
                </Col>
                <Col xs={9}>
                  <Muted>
                    {modalContent.organization &&
                      modalContent.organization.address}
                  </Muted>
                </Col>
              </Row>
            </DetailsContainer>
          </Content>
        </Modal.Body>
        <Modal.Footer>
          <FootContent>
            <Button
              variant="danger"
              onClick={() => {
                context.removePerson(modalContent.id);
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
