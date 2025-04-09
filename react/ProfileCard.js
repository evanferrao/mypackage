import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css'; // Regular CSS
import styles from './ProfileCard.module.css'; // CSS Module

const ProfileCard = ({ name, age, location }) => {
  const inlineStyles = {
    card: {
      boxShadow: '0 0 8px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '300px',
      margin: '20px auto',
      backgroundColor: '#fff'
    },
    name: {
      fontSize: '1.5rem',
      margin: '0',
      color: '#333'
    },
    age: {
      color: '#777',
    }
  };

  return (
    <div style={inlineStyles.card} className="profileCardContainer">
      <h2 style={inlineStyles.name}>{name}</h2>
      <p style={inlineStyles.age}>Age: {age}</p>
      <p className={styles.location}>📍 {location}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileCard;
