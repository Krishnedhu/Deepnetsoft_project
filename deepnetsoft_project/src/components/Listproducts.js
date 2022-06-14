import React, { useState, useEffect } from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Listproducts = () => {
const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/Listproducts");
    result = await result.json();
    setProducts(result);
  }

  console.log(products)

  return (
    <div>

      <h1 className='text-center mt-5 text-light'>Product List</h1>
      <Container className='mt-5' style={{ width: "800px" }}>
        <Table striped bordered hover size="md">
          <thead className='text-light'>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>

            </tr>
          </thead>
          <tbody>
            {
              products.map((pro, index) =>
                <tr className='text-light' key={pro}>
                  <td>{index + 1}</td>
                  <td>{pro.name}</td>
                  <td>{pro.price}</td>
                  <td>{pro.qty}</td>
                  <td>{pro.category}</td>
                </tr>
              )
            }

          </tbody>
        </Table>
        <Link to="/">
          <Button className="mt-5" style={{marginLeft :"700px"}} variant="primary" type="submit">
            Back
          </Button>
        </Link>
      </Container>
    </div>
  )
}

export default Listproducts