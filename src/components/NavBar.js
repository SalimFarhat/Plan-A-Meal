import {Container, Nav, Navbar} from 'react-bootstrap';
import React, { useContext } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { MyContext } from '../contexts/context';
import axios from '../Axios';
import { useNavigate } from "react-router-dom";
import '../styles.css';

const AppNavBar = () => {
  const History = useNavigate();
  const{user, setUser} = useContext(MyContext)
  const handleLogout = () => {
    axios.post('/logout')
    .then((res) => {
      localStorage.removeItem("token");
      setUser(null);
      History(`/`);
    });
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand>Meals</Navbar.Brand>
        
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {!user &&(
          <Nav className="me-auto">
            
            <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
            <Nav.Link>signup</Nav.Link>
            </LinkContainer>
                      </Nav>
        )}
        {user && (       
          <> 
          <LinkContainer to="/favorites" className="favButton">
            <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </>
        )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;