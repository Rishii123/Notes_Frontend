import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import API from "../api/api";

function InvitePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("MEMBER");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/me");
        setUser(res.data);
        if (res.data.role !== "ADMIN") {
          navigate("/notes");
        }
      } catch (err) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleInvite = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/invite", { email, role, name });
      setSuccess("Invitation sent successfully!");
      setEmail("");
      setRole("MEMBER");
      setName("");
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Error sending invitation");
      setSuccess("");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div>
      <Header user={user} />
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h1>Invite Member</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <form onSubmit={handleInvite}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="MEMBER">Member</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <div>
            <label>Name (optional):</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit">Send Invitation</button>
        </form>
      </div>
    </div>
  );
}

export default InvitePage;