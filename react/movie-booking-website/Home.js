import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, name: 'Interstellar' },
  { id: 2, name: 'Inception' },
  { id: 3, name: 'Dune' }
];

const Home = () => (
  <div>
    <h2>Select a Movie</h2>
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
