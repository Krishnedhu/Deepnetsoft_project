import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    // console.log(name,email,password,place);
    let result = await fetch("http://localhost:5000/Register", {
      method: 'post',
      body: JSON.stringify({ name, email, password, place }),
      headers: {
        'content-Type': 'application/json'
      }

    });

    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result))
    navigate('/Login')
  }

  return (
    <>

      <h1 className='text-center mt-5 text-light'>Registeration</h1>
      <Form>
        <Container style={{ width: "500px" }}>
          <Form.Group className="pt-5" controlId="formBasicName">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter the name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="pt-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email id" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="pt-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group className="pt-3" controlId="formBasicPlace">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter the place" value={place} onChange={(e) => setPlace(e.target.value)} />
          </Form.Group>
          <Link to="/Login">
            <Button onClick={submit} className="mt-5" style={{marginLeft :"200px"}} variant="primary" type="submit">
              Submit
            </Button>
          </Link>
          
        </Container>
      </Form>
    </>

  )
}

export default Register