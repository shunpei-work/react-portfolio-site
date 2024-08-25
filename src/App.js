/* import logo from './logo.svg'; */
import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';


function App() {
  return (
    <React.Fragment>{/* <></>に書き換え可能 */}
          <Header /> 
          <Skills />
          <Contact />
    </React.Fragment>
  );
}


export default App;
