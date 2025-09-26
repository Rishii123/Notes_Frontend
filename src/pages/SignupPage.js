import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";
import "./CSS/SignupPage.css";

function SignupPage() {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tenant, setTenant] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const mappedPlan = plan === 'free' ? 'FREE' : 'PRO';
      await API.post("/auth/signup", { email, password, tenant, plan: mappedPlan });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Signup failed. Try again.";
      setError(errorMsg);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup ({plan} plan)</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Tenant / Company Name"
          value={tenant}
          onChange={(e) => setTenant(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
