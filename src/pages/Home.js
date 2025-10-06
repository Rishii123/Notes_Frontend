import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-left">
        <img
          src="https://static.vecteezy.com/system/resources/previews/025/729/946/original/note-taking-app-icon-in-illustration-vector.jpg"
          alt="Notes"
          className="home-image"
        />
      </div>
      <div className="home-right">
        <b><h1>Welcome to Multi-Tenant Notes App</h1></b>
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
