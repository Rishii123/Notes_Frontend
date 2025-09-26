import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Header.css";

function Header({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [];

  if (user.role === "ADMIN") {
    menuItems.push(
      { label: "Profile", action: () => navigate("/profile") },
      { label: "Notes", action: () => navigate("/notes") },
      { label: "Invite Member", action: () => navigate("/invite") }
    );
  } else {
    menuItems.push(
      { label: "Profile", action: () => navigate("/profile") },
      { label: "Notes", action: () => navigate("/notes") }
    );
  }

  return (
    <header className="header">
      <div className="logo">Notes App</div>
      <div className="user-info">
        <span>Welcome, {user.email}</span>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && (
          <div className="menu">
            {menuItems.map((item, idx) => (
              <div key={idx} className="menu-item" onClick={() => { item.action(); setMenuOpen(false); }}>
                {item.label}
              </div>
            ))}
            <div className="menu-item" onClick={handleLogout}>Logout</div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;