import {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import NavBar from './components/NavBar';
import Home from './components/';
import axios from 'axios'


const App = () => {



  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
