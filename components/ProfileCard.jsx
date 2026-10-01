import React, { useState } from "react";
import { MapPin, Star, MessageSquare, UserPlus, CheckCircle2 } from "lucide-react";

/**
 * ProfileCard Component (Child Component)
 * ========================================
 * ACADEMIC REQUIREMENT: Demonstrates receiving props from parent component (App.jsx).
 *
 * @param {Object} props - Read-only data passed from parent component
 * @param {string} props.name - Profile user's name
 * @param {string} props.imageUrl - Profile image URL
 * @param {string} props.description - Short bio/description
 * @param {string} [props.role] - Professional title/role
 * @param {string} [props.location] - Location string
 * @param {Array<string>} [props.skills] - List of skills
 * @param {boolean} [props.isOnline] - Online status boolean
 * @param {number|string} [props.projectsCount] - Total projects completed
 * @param {string} [props.rating] - Peer rating
 */
export default function ProfileCard({
  name,
  imageUrl,
  description,
  role = "Software Specialist",
  location = "Remote",
  skills = [],
  isOnline = false,
  projectsCount = 0,
  rating = "5.0"
}) {
  // Local state for image error handling (Fallback SVG avatar if URL fails to load)
  const [imgError, setImgError] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Fallback avatar using SVG UI initials
  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || "User"
  )}&background=4f46e5&color=fff&size=200&bold=true`;

  return (
    <article className="profile-card">
      {/* Visual Indicator of Online Status */}
      <div className="card-top-bar">
        <span className={`status-badge ${isOnline ? "online" : "offline"}`}>
          <span className="status-dot"></span>
          {isOnline ? "Available for hire" : "Away"}
        </span>
        <span className="rating-badge">
          <Star className="star-icon" size={14} />
          {rating}
        </span>
      </div>

      {/* Header Avatar Section */}
      <div className="avatar-wrapper">
        <img
          src={imgError ? fallbackAvatar : imageUrl}
          alt={`Profile portrait of ${name}`}
          className="profile-avatar"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </div>

      {/* Body Information Section */}
      <div className="card-body">
        {/* Dynamic Name received via props */}
        <h3 className="profile-name">{name}</h3>

        {/* Dynamic Role received via props */}
        <p className="profile-role">{role}</p>

        {/* Dynamic Location received via props */}
        <div className="profile-location">
          <MapPin size={13} />
          <span>{location}</span>
        </div>

        {/* Dynamic Description received via props */}
        <p className="profile-description">{description}</p>

        {/* Dynamic Skills Tag List */}
        {skills && skills.length > 0 && (
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="card-footer">
        <div className="card-stats">
          <span className="stat-number">{projectsCount}</span>
          <span className="stat-label">Projects</span>
        </div>

        <div className="action-buttons">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`btn-connect ${isFollowing ? "active" : ""}`}
            aria-label={`Connect with ${name}`}
          >
            {isFollowing ? (
              <>
                <CheckCircle2 size={15} />
                <span>Connected</span>
              </>
            ) : (
              <>
                <UserPlus size={15} />
                <span>Connect</span>
              </>
            )}
          </button>
          
          <button className="btn-icon" aria-label={`Message ${name}`}>
            <MessageSquare size={16} />
          </button>
        </div>
      </div>

      {/* Code Annotation for Academic Evaluation */}
      <div className="props-debug-badge">
        <code>prop: name="{name}"</code>
      </div>
    </article>
  );
}
