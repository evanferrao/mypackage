import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { name: 'T-shirt', price: 20 },
  { name: 'Shoes', price: 50 },
  { name: 'Cap', price: 15 }
];

const Shop = ({ addToCart }) => (
  <div className="shop">
    <h2>🛒 Shop</h2>
    <Link to="/"><button>Home</button></Link>
    <Link to="/cart"><button>View Cart</button></Link>

    <ul>
      {products.map((product, index) => (
        <li key={index}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Add</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Shop;
