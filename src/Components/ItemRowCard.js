import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import {
  Span,
  Muted,
  Block,
  IconHolder,
  Content,
  ImageContainer
} from './StyledComponents/ItemRowCard.styles';

const ItemRowCard = ({ item }) => {
  let splitName = item.name.split(' ');
  let splitFinal = splitName.length - 1;
  let first = splitName[0] && splitName[0][0];
  let last = splitFinal && splitName[splitFinal] && splitName[splitFinal][0];
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
          {first}
          {last ? last : first}
        </ImageContainer>
      </Content>
    </>
  );
};

ItemRowCard.propTypes = {
  item: PropTypes.any.isRequired
};

export default ItemRowCard;
