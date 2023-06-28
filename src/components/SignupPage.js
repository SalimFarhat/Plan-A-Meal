import axios from '../Axios';
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MyContext } from '../contexts/context';
import { useNavigate } from "react-router-dom";


function SignupPage() {
  const History = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const{user, setUser} = useContext(MyContext)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if(!email || !password){
        return alert("Please enter email or password");
      }else{
        axios.post('/users', {email, password}).then((res) => {
          localStorage.setItem('token', res.data.token)
          setUser(res.data);
          History(`/`);
        }).catch(error => console.log(error))
      }
    }

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default SignupPage