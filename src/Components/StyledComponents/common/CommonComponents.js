import styled from 'styled-components';
export const LoadMoreButton = styled.button`
  border-radius: 3px;
  border: 1px solid;
  background: #282c34;
  color: white;
  padding: 15px;
  margin: 15px;
  font-size: 15px;
  text-transform: uppercase;
  min-width: 50px;
`;
export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeadingLabel = styled.h3`
  &.no-border {
    border: none;
    padding: 0;
  }
  .right-block {
    .search {
      margin: 0 20px;
    }
    display: flex;
  }
  .addpeople {
    background: #08a742;
    border-color: #08a742;
    color: white;
    margin-right: 13px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  color: #282c34;
  padding: 20px 10px;
  font-size: 17px;
  text-transform: none;
  margin: 0;
  font-weight: bolder;
  border-bottom: 1px #ccc solid;
`;
