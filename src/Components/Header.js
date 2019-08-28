import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
const HeaderBlock = styled.header`
  height: 50px;
  background-color: #404346;
  display: flex;
  align-items: center;
  .logo {
    color: white;
    padding: 5px;
    .icon {
      height: 48px;
      min-width: 120px;
      text-indent: -9000px;
      overflow: hidden;
      display: block;
      color: #fff;
      background: transparent url(${logo}) 12px 12px no-repeat;
      background-size: auto;
      background-size: 106px 24px;
    }
  }
`;
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <div className="logo">
          <div className="icon">Pipe</div>
        </div>
      </HeaderBlock>
    </>
  );
};

export default Header;
