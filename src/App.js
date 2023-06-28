import {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import NavBar from './components/NavBar';
import Home from './components/';
import MealsContainer from './components/MealsContainer';
import AppContext, { MyContext } from './contexts/context';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import SignupPage from './components/SignupPage';
import axios from './Axios';
import Favorites from './components/Favorites';


const App = () => {
  const{user, setUser} = useContext(MyContext);
  useEffect(() => {
    axios.post('/auto-login')
    .then((res) => {
      console.log(res.data);
      setUser(res);
      setUser(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])
  console.log(user);
  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      {!user && (<>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignupPage />} />
      </>)}
      {user && (
        <Route exact path ="/favorites" element={<Favorites />} />
      )}
      <Route exact path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
