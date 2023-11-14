import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ cartItems }) => {
  const cartCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <ul>
        <li>
          Cart Items: {cartCount}
        </li>
        <li>
          {/* Placeholder for checkout button */}
          <button className='checkout_button'>Checkout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
