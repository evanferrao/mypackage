import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>🛍️ Welcome to the Store</h1>
    <Link to="/shop"><button>Go to Shop</button></Link>
  </div>
);

export default Home;
