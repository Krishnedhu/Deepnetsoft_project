import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    let result = await fetch("http://localhost:5000/Login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/AddProduct")
    } else {
      alert("Please enter the correct value")
    }

  }

  return (
    <div>
      <h1 className='text-center mt-5 text-light'>Login  </h1>

      <Form>
        <Container style={{ width: "500px" }}>


          <Form.Group className="pt-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email id" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="pt-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Link to="/AddProduct">
            <Button onClick={login} className="mt-5" style={{marginLeft :"100px"}} variant="primary" type="submit">
              Login
            </Button>
          </Link>

          <Link to="/">
            <Button className="mt-5 ms-5" style={{marginLeft :"80px"}} variant="primary" type="submit">
              Registeration
            </Button>
          </Link>
        </Container>
      </Form>
    </div>
  )
}

export default Login