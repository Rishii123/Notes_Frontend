import React, { useState, useEffect } from "react";
import API from "../api/api";
import NoteItem from "./NoteItem";
import UpgradeModal from "./UpgradeModal";
import "./CSS/NotesList.css";

function NotesList({ user }) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  const addNote = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {
        const res = await API.put(`/notes/${editingNote._id}`, { title, content });
        setNotes(notes.map(n => n._id === editingNote._id ? res.data : n));
        setEditingNote(null);
      } else {
        if (user.tenant.plan === "FREE" && notes.length >= 3) {
          setShowUpgradeModal(true);
          return;
        }
        const res = await API.post("/notes", { title, content });
        setNotes([res.data, ...notes]);
      }
      setTitle("");
      setContent("");
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || (editingNote ? "Error updating note" : "Error adding note"));
    }
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    setNotes(notes.filter((n) => n._id !== id));
  };

  const editNote = (note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const cancelEdit = () => {
    setEditingNote(null);
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (!user || !user.tenant) return <div>Loading...</div>;

  return (
    <div className="notes-container">
      <h2>{user.tenant.slug.toUpperCase()} Notes ({user.tenant.plan} Plan)</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={addNote} className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">{editingNote ? "Update Note" : "Add Note"}</button>
        {editingNote && <button type="button" onClick={cancelEdit}>Cancel</button>}
      </form>

      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} onDelete={deleteNote} onEdit={editNote} />
        ))}
      </div>

      {showUpgradeModal && (
        <UpgradeModal
          slug={user.tenant.slug}
          onClose={() => setShowUpgradeModal(false)}
          onUpgrade={() => window.location.reload()}
        />
      )}
    </div>
  );
}

export default NotesList;
