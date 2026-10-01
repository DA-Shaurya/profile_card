import React from "react";
import "./ProfileCard.css";

// Child Component: Receives profile data via props from App.jsx
function ProfileCard({ name, imageUrl, description }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
}

export default ProfileCard;
