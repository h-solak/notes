import { useState, useEffect } from "react";
import {
  FaTasks,
  FaRegStickyNote,
  FaRegCheckSquare,
  FaPencilAlt,
} from "react-icons/fa";

const AddNote = ({ handleAddNote }) => {
  const [isFocused, setIsFocused] = useState(false); //focused on input or not
  const [isNote, setIsNote] = useState(true); //writing a note or a checkbox (task)
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  //Type: note
  const handleNoteClick = () => {
    document.getElementById("note").classList.add("type-icon-active");
    document.getElementById("checkbox").classList.remove("type-icon-active");
    document.getElementById("tasks-icon-left").classList.remove("hide");
    document.getElementById("checkbox-icon-left").classList.add("hide");

    setIsFocused(true);
    setIsNote(true);
  };

  //Type: checkbox
  const handleCheckBoxClick = () => {
    document.getElementById("note").classList.remove("type-icon-active");
    document.getElementById("checkbox").classList.add("type-icon-active");
    document.getElementById("tasks-icon-left").classList.add("hide");
    document.getElementById("checkbox-icon-left").classList.remove("hide");

    setIsFocused(true);
    setIsNote(false);
  };

  useEffect(() => {
    const input = document.querySelector("#task-text");

    if (input === document.activeElement) {
      // document.querySelector(".add-container").classList.add("focused-input")
      document.querySelector("#title-input").classList.remove("hide");
      document.querySelector(".add-icon").classList.remove("hide");
      document.getElementById("task-text").rows = "3";
      document.querySelector(".input-container").style.alignItems = "baseline";
    } else {
      // document.querySelector(".add-container").classList.remove("focused-input")
    }
  }, [isFocused]);

  const focusOnInput = () => {
    setIsFocused(true);
    document.querySelector("#task-text").focus();
  };

  //Save
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      let noteArr = [noteText, noteTitle, isNote];
      handleAddNote(noteArr);
      setNoteText("");
      setNoteTitle("");
      document.querySelector("#title-input").classList.add("hide");
      document.querySelector(".add-icon").classList.add("hide");
      document.getElementById("task-text").rows = "1";
      document.querySelector(".input-container").style.alignItems = "center";
    }
  };

  const handleTitleChange = (event) => {
    if (event.target.value.length < 10) {
      setNoteTitle(event.target.value);
    }
  };

  const handleTextChange = (event) => {
    if (
      event.target.value.length < 1000 &&
      countWords(event.target.value) < 200
    ) {
      setNoteText(event.target.value);
    }
  };

  const countWords = (text) => {
    let trimmedText = text.trim();
    return trimmedText.split(" ").length;
  };

  return (
    <div className="extended-container">
      <input
        id="title-input"
        className="hide"
        placeholder="Title"
        value={noteTitle}
        onChange={handleTitleChange}
        autoComplete="off"
      />
      <span onClick={focusOnInput} className="add-container">
        <div className="input-container">
          <div className="add-start">
            <FaPencilAlt id="tasks-icon-left" className="tasks-icon" />
            <FaTasks id="checkbox-icon-left" className="tasks-icon hide" />
          </div>
          <textarea
            id="task-text"
            className="add-input"
            placeholder="Add something here..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows="1"
            value={noteText}
            onChange={handleTextChange}
          />
        </div>
        <div className="note-options">
          <FaRegStickyNote
            id="note"
            onClick={handleNoteClick}
            className="type-icon type-icon-active"
          />
          <FaRegCheckSquare
            id="checkbox"
            onClick={handleCheckBoxClick}
            className="type-icon"
          />
        </div>
      </span>

      <span className="add-icon hide" onClick={handleSaveClick}>
        Save
      </span>
    </div>
  );
};

export default AddNote;
