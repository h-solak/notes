import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { nanoid } from "nanoid";

export default function NotesList({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleCheckNote,
  handleCopyNote,
}) {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      <div className="notes-container">
        {notes.map((note) => (
          /* <textarea value={note.text}></textarea> */ //I might try to make the notes editable
          <Note
            id={note.id}
            title={note.title}
            text={note.text}
            type={note.type}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            handleCheckNote={handleCheckNote}
            handleCopyNote={handleCopyNote}
            checked={note.checked}
            key={nanoid()} //don't know if it is going to cause some problems or not
          />
        ))}
      </div>
    </div>
  );
}
