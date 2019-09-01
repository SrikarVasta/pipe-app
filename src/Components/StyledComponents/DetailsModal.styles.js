import styled from 'styled-components';

export const Content = styled.div`
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
  &.loading {
    align-items: flex-start;
  }
  &.head-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export const Name = styled.h5`
  font-weight: 900;
  font-size: 17px;
`;
export const DetailsContainer = styled.div`
  width: 75%;
  padding: 20px 0px;
  .row {
    padding: 10px 0;
    align-items: center;
  }
`;
export const Phone = styled.h5`
  font-weight: 900;
  font-size: 19px;
  color: #08a742;
  padding-bottom: 5px;
`;
export const HeadContent = styled.div`
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
export const FootContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: #f5f7fb;
`;
export const ImageContainer = styled.div`
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
export const Title = styled.h5`
  font-size: 12px;
  font-weight: 900;
  text-align: right;
  width: 89px;
  margin: 0;
`;
export const Muted = styled.h5`
  color: grey;
  font-size: 12px;
  font-weight: 900;
  text-align: left;
  margin: 0;
  padding-left: 5%;
`;
