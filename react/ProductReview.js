import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductReview.module.css';

const Review = ({ name, comment, rating }) => (
  <div className={styles.review}>
    <h4>{name} - ⭐ {rating}/5</h4>
    <p>{comment}</p>
  </div>
);

Review.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: function (props, propName, componentName) {
    const value = props[propName];
    if (typeof value !== 'number' || value < 1 || value > 5) {
      return new Error(`${propName} in ${componentName} must be a number between 1 and 5`);
    }
  }
};

const ProductReview = ({ product }) => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', comment: '', rating: 5 });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.comment || form.rating < 1 || form.rating > 5) return;

    setReviews([...reviews, { ...form }]);
    setForm({ name: '', comment: '', rating: 5 });
  };

  return (
    <div className={styles.productReview}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className={styles.image} />
      <p>{product.description}</p>

      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          placeholder="Your review"
          value={form.comment}
          onChange={e => setForm({ ...form, comment: e.target.value })}
        />
        <input
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={e => setForm({ ...form, rating: parseInt(e.target.value) })}
        />
        <button type="submit">Submit Review</button>
      </form>

      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((r, idx) => (
          <Review key={idx} name={r.name} comment={r.comment} rating={r.rating} />
        ))
      )}
    </div>
  );
};

ProductReview.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ProductReview;
