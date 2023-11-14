import React, { useEffect, useState } from 'react';
import shopLogo from '../assets/shop.png';
import { Link } from 'react-router-dom';
import '../styles/Shop.css';

const Shop = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const incrementQuantity = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrementQuantity = (id) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }));
  };

  const updateQuantity = (id, quantity) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, quantity) }));
  };

  
  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        // If the product is already in the cart, increment its quantity
        newCart[product.id].quantity += quantity;
      } else {
        // If the product is not in the cart, add it
        newCart[product.id] = { ...product, quantity };
      }
      return newCart;
    });
  };
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <img src={shopLogo} className="logo_shop" alt="Shop logo" />
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <img className='product_image' src={product.image} alt={product.title} />
            <div className="price-button-container">
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="quantity-selector">
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <input 
                  type="number" 
                  value={quantities[product.id] || 0} 
                  onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))} 
                />
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => addToCart(product, quantities[product.id] || 1)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

