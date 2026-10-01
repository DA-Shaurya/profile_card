import React from "react";
import { ArrowRight, Code2, Layers, Cpu } from "lucide-react";

/**
 * PropsBanner Component
 * Visual explanation of One-Way Data Flow: App.jsx -> Props -> ProfileCard.jsx
 */
export default function PropsBanner({ totalProfiles, activeFilter, onFilterChange }) {
  return (
    <div className="props-architecture-banner">
      <div className="architecture-header">
        <div className="architecture-title">
          <Code2 className="header-icon" size={20} />
          <span>React Props Architectural Flow</span>
        </div>
        <span className="live-counter">
          Rendering <strong>{totalProfiles}</strong> dynamic cards
        </span>
      </div>

      <div className="flow-diagram">
        {/* Parent Box */}
        <div className="flow-step parent-step">
          <div className="step-icon">
            <Layers size={18} />
          </div>
          <div className="step-content">
            <span className="step-tag">Parent Component</span>
            <strong className="step-name">App.jsx</strong>
            <span className="step-detail">Holds profiles array state</span>
          </div>
        </div>

        {/* Flow Arrow */}
        <div className="flow-arrow">
          <span className="arrow-label">passes props</span>
          <ArrowRight size={18} className="arrow-icon" />
        </div>

        {/* Child Box */}
        <div className="flow-step child-step">
          <div className="step-icon">
            <Cpu size={18} />
          </div>
          <div className="step-content">
            <span className="step-tag">Child Component</span>
            <strong className="step-name">ProfileCard.jsx</strong>
            <span className="step-detail">Receives name, imageUrl, description</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs to demonstrate dynamic prop updates */}
      <div className="filter-toolbar">
        <span className="filter-label">Filter Profiles:</span>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => onFilterChange("all")}
          >
            All Profiles ({totalProfiles})
          </button>
          <button
            className={`filter-btn ${activeFilter === "online" ? "active" : ""}`}
            onClick={() => onFilterChange("online")}
          >
            Available Now
          </button>
          <button
            className={`filter-btn ${activeFilter === "engineering" ? "active" : ""}`}
            onClick={() => onFilterChange("engineering")}
          >
            Engineering & Cloud
          </button>
        </div>
      </div>
    </div>
  );
}
