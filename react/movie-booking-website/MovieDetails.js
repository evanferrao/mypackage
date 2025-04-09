import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const bookSeats = () => {
    alert(`Booked seats: ${selectedSeats.join(', ')}`);
    setSelectedSeats([]);
  };

  return (
    <div>
      <h2>Movie ID: {id}</h2>
      <Link to="/"><button>Home</button></Link>
      <div className="seats">
        {seats.map(seat => (
          <button
            key={seat}
            className={selectedSeats.includes(seat) ? 'selected' : ''}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>
      <button onClick={bookSeats} disabled={selectedSeats.length === 0}>
        Book Now
      </button>
    </div>
  );
};

export default MovieDetails;
