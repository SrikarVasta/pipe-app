import React from 'react';
import Header from './Header';
import List from './List';
const Layout = props => {
  return (
    <>
      <div>
        <Header />
        <List />
      </div>
    </>
  );
};

export default Layout;
