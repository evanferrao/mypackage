import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ name, price, available }) => {
  const cardStyle = {
    backgroundColor: available ? '#e0ffe0' : '#ffe0e0',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    margin: '10px 0',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    transition: '0.3s ease',
  };

  const priceStyle = {
    fontWeight: 'bold',
    color: available ? 'green' : 'red',
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p style={priceStyle}>₹{price}</p>
      <p>Status: {available ? '✅ In Stock' : '❌ Out of Stock'}</p>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
};

const ProductCatalog = () => {
  const products = [
    { name: 'Wireless Mouse', price: 599, available: true },
    { name: 'Gaming Keyboard', price: 1999, available: false },
    { name: 'Bluetooth Speaker', price: 1299, available: true },
    { name: 'Laptop Stand', price: 749, available: false },
  ];

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>🛍️ Product Catalog</h2>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          available={product.available}
        />
      ))}
    </div>
  );
};

export default ProductCatalog;
