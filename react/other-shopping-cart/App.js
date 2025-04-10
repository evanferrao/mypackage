// App.js
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './styles.css'; // Import the CSS file

const products = [
    { id: 1, name: 'Laptop', price: 10 },
    { id: 2, name: 'Keyboard', price: 20 },
    { id: 3, name: 'Desk', price: 30 },
];

const App = () => {
    return (
        <div className="app">
            <h1>E-Commerce App</h1>
            <ProductList products={products} />
            <hr />
            <Cart />
        </div>
    );
};

export default App;
