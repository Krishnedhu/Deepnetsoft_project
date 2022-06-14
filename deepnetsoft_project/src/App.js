import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import Listproducts from './components/Listproducts';

 
function App() {

        
  return (
      <Router>
        
        <main className='py-3'>
          <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/AddProduct' element={<AddProduct />}/>
          <Route path='/Listproducts' element={<Listproducts />}/>
          </Routes>
        </main>
         </Router>
  );
}

export default App;
