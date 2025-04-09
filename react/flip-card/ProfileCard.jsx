import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-face front">
          <img src="./IMG_20221024_212613.jpg" alt="profile" className="avatar" />
          <h2>Satwik Nukala</h2>
          <p className="highlight">just a restless mind</p>
          <p className="description">
            wth too many ideas & not enough time<br />
            prbly overthinking my next move rn
          </p>
        </div>
        <div className="card-face back">
          <h3>CONTACT</h3>
          <p>satwiknukala1505@gmail.com</p>
          <h3>CONNECT</h3>
          <div className="links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
          </div>
          <h4>CURRENT OBSESSIONS</h4>
          <p className="obsessions">guitar,art, music, ai, chess</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
