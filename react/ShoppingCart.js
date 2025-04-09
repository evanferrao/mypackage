import React, { useState } from 'react';
import './ShoppingCart.css';

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Headphones', price: 120 },
  { id: 3, name: 'Keyboard', price: 60 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      <div className="products">
        <h3>Products</h3>
        {sampleProducts.map(product => (
          <div key={product.id} className="product">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <span>${item.price * item.quantity}</span>
                <button className="remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${total}</h4>
      </div>
    </div>
  );
};

export default ShoppingCart;
