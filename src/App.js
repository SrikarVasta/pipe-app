import React from 'react';
import './App.scss';
import Layout from './Components/Layout';
import GlobalState from './Context/GlobalState';
function App() {
  return (
    <div className="App">
      <GlobalState>
        <Layout />
      </GlobalState>
    </div>
  );
}

export default App;
