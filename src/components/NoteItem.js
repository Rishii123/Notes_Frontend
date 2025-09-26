import React from "react";
import "./CSS/NoteItem.css";

function NoteItem({ note, onDelete, onEdit }) {
  return (
    <div className="note-item">
      <h4>{note.title}</h4>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  );
}

export default NoteItem;
