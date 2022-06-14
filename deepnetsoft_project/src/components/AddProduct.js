import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AddProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");

  const add = async () => {

    // console.log(name, price, qty, category);
    const userId = JSON.parse(localStorage.getItem('user'));
    console.log(userId);
    let result = await fetch("http://localhost:5000/AddProduct", {
      method: 'post',
      body: JSON.stringify({ name, price, qty, category }),
      headers: {
        "Content-type": "application/json"
      }
    });
    result = await result.json();
    console.log(result)
  }

  return (
    <>
      <h1 className='text-center mt-5 text-light'>Add Product</h1>

      <Form>
        <Container style={{ width: "500px" }}>
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicQuantity">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter quantity" value={qty} onChange={(e) => setQty(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Ente category" value={category} onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>

          <Link to="/Listproducts">
            <Button onClick={add} className="mt-5" style={{marginLeft :"200px"}} variant="primary" type="submit">
              Add
            </Button>
          </Link>

        </Container>

      </Form>
     </>
  )
}

export default AddProduct