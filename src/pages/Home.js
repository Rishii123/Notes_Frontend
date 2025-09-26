import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
          alt="Notes"
          className="home-image"
        />
      </div>
      <div className="home-right">
        <h1>Welcome to Multi-Tenant Notes App</h1>
        <p>
          Organize your ideas, collaborate with your team, and never lose a note
          again. Choose a plan that fits your needs and get started today!
        </p>
        <div className="home-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/plans")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
