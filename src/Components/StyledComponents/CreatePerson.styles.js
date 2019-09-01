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
  &.head-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
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
  justify-content: space-between;
  width: 100%;
  background-color: #f5f7fb;
`;
