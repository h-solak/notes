import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (noteArray) => {
    let isNote = null;
    if (!noteArray[2]) {
      isNote = "checkbox";
    } else {
      isNote = "note";
    }
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: noteArray[0],
      title: noteArray[1],
      type: isNote,
      date: date.toLocaleString(),
      checked: false,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const checkNote = (id) => {
    const selectedNote = notes.filter((note) => note.id === id); //it fetches this object in an array, to access it we should use it like arr[0]
    let allNotes = notes.filter((note) => note.id !== id);
    selectedNote[0].checked = !selectedNote[0].checked;
    allNotes = [...allNotes, selectedNote[0]];
    setNotes(allNotes);
  };

  const copyNote = (id) => {
    const selectedNote = notes.filter((note) => note.id === id);
    let selectedText = selectedNote[0].text;
    navigator.clipboard.writeText(selectedText);
  };

  //LET USER CHOOSE THE COLOR OF THE NEW NOTE

  return (
    <>
      <h1>NOTES</h1>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleCheckNote={checkNote}
        handleCopyNote={copyNote}
      />
    </>
  );
}

export default App;
