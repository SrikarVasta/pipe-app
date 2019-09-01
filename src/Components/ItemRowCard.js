import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';
const Span = styled.span`
  height: 30px;
  display: flex;
  align-items: center;
`;
const Muted = styled.span`
  color: grey;
  line-height: 5px;
`;
const Block = styled.div`
  margin: 10px 0;
`;
const IconHolder = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span:first-child {
    padding-right: 5px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 45px;
  width: 45px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
  }
`;
const ItemRowCard = ({ item }) => {
  return (
    <>
      <Content>
        <Block>
          <div>
            <Span>{item.name}</Span>
          </div>
          <IconHolder>
            <Span>
              <FontAwesomeIcon icon={faCity} />
            </Span>
            <Muted>{item.org_name}</Muted>
          </IconHolder>
        </Block>
        <ImageContainer>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg" />
        </ImageContainer>
      </Content>
    </>
  );
};

ItemRowCard.propTypes = {
  item: PropTypes.any.isRequired
};

export default ItemRowCard;
