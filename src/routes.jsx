import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import { useState } from 'react';


const RoutesComponent = () => {
  const [cart, setCart] = useState({});

  return (
    <div>
      <Navbar cartItems={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />

      </Routes>
    </div>
  );
};

export default RoutesComponent;