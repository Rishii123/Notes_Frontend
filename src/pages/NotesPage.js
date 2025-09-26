import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotesList from "../components/NotesList";
import Header from "../components/Header";
import API from "../api/api";

function NotesPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div>
      <Header user={user} />
      <NotesList user={user} />
    </div>
  );
}

export default NotesPage;
