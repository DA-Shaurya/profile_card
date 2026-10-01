import React from "react";

// =========================================================================
// 1. EMBEDDED STYLES (Single-File CSS)
// =========================================================================
const styles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f8fafc;
    color: #0f172a;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .app {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    font-size: 2.75rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .profile-card {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }

  .profile-image {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.2rem;
    border: 3px solid #4f46e5;
  }

  .profile-name {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 0.6rem;
  }

  .profile-description {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.5;
  }

  .footer {
    margin-top: auto;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #e2e8f0;
    color: #64748b;
    font-size: 0.9rem;
  }
`;

// =========================================================================
// 2. REUSABLE CHILD COMPONENT (ProfileCard - Consumes Props)
// =========================================================================
function ProfileCard({ name, imageUrl, description }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
}

// =========================================================================
// 3. PARENT COMPONENT (App - Passes Props)
// =========================================================================
export default function App() {
  // Profiles Data Array in Parent Component
  const users = [
    {
      id: 1,
      name: "Sarah Jenkins",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      description: "Software Architect specializing in building scalable web applications and cloud solutions."
    },
    {
      id: 2,
      name: "Alex Rivera",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "UI/UX Designer passionate about human-centered design and modern user interfaces."
    },
    {
      id: 3,
      name: "Elena Rostova",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      description: "Full Stack Developer building performant web apps using React and Node.js."
    },
    {
      id: 4,
      name: "Marcus Vance",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      description: "AI & Frontend Specialist focusing on interactive web tools and modern frameworks."
    }
  ];

  return (
    <div className="app">
      {/* Inject Single-File CSS */}
      <style>{styles}</style>

      {/* Header Section */}
      <header className="header">
        <h1 className="title">Our Profiles</h1>
        <p className="subtitle">
          Demonstrating one-way data flow from parent component (App) to child component (ProfileCard) using React Props.
        </p>
      </header>

      {/* Grid of Profile Cards */}
      <main className="cards-grid">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            imageUrl={user.imageUrl}
            description={user.description}
          />
        ))}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>Assignment 4: React Profile Card using Props &bull; Data Flow: App &rarr; ProfileCard</p>
      </footer>
    </div>
  );
}
