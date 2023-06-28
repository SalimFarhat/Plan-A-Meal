
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MyContext } from '../contexts/context';
import axios from '../Axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles.css';

function Login() {
  const History = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const{user, setUser} = useContext(MyContext)

  const handleLogin = (e) => {
    e.preventDefault()
    if(!email || !password){
      return alert("Please enter email or password");
    }else{
      axios.post('/login', {email, password}).then((res) => {
        localStorage.setItem('token', res.data.token)
        setUser(res.data);
        console.log(res.data.token);
        History(`/`);
      }).catch(error => console.log(error))
    }
  }


  return (
    <div className='login-button'>
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
      </Form.Group>
        <Button variant="primary" type="submit">
        Login
        </Button>
    </Form>
    </div>
    )
}

export default Login