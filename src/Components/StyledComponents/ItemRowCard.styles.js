import styled from 'styled-components';

export const Span = styled.span`
  text-transform: capitalize;
  height: 30px;
  display: flex;
  align-items: center;
`;
export const Muted = styled.span`
  color: grey;
  line-height: 5px;
`;
export const Block = styled.div`
  margin: 10px 0;
`;
export const IconHolder = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span:first-child {
    padding-right: 5px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ImageContainer = styled.div`
  height: 45px;
  width: 45px;
  overflow: hidden;
  border-radius: 50%;
  background: #90caf9;
  color: #1976d2;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 600;
  img {
    width: 100%;
    height: auto;
  }
`;
