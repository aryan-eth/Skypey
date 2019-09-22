import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import  _ from 'lodash';
import store from "../store";


// export default App;
const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};
export default App;