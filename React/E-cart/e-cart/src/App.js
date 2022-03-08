import React, { Component } from 'react';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/payment" element={<CheckOut/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App
