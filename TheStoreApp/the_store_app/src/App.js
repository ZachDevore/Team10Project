import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Dealpage from './components/Dealpage';
// import Product from './components/Product';

class App extends Component {
  render() {
    return ( 
      <React.Fragment>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ProductList></ProductList>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/deal' element={<Dealpage></Dealpage>}></Route>
          <Route element={<Default></Default>}></Route>
        </Routes>
      </React.Fragment >

   );
  }
}

export default App;//45:19
