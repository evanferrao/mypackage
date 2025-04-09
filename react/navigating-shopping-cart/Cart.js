import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>🧺 Your Cart</h2>
    <Link to="/"><button>Home</button></Link>
    <Link to="/shop"><button>Back to Shop</button></Link>

    {cart.length === 0 ? (
      <p>No items in cart.</p>
    ) : (
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
