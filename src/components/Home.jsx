import React from 'react';
import { Link } from 'react-router-dom';
import shopLogo from '../assets/shop.png';
import '../styles/Home.css';

function Home() {
  
  return (
    <>
      <div>
        <img src={shopLogo} className="logo_shop" alt="Shop logo" />
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Home;
