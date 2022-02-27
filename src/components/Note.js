import { AiFillDelete } from "react-icons/ai";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
const Note = ({
  id,
  title,
  text,
  type,
  date,
  checked,
  handleDeleteNote,
  handleCheckNote,
  handleCopyNote,
}) => {
  // if (document.querySelector(".checkbox").checked) {
  //   document.querySelector(".note-text").style.textDecoration = "underline";
  // }

  return (
    <div className="note">
      {title.trim().length > 0 ? (
        <span className="note-title">{title}</span>
      ) : null}
      <div className="text-container">
        {type === "checkbox" ? (
          <span
            onClick={() => {
              handleCheckNote(id);
            }}
            className="checkbox"
          >
            {checked ? (
              <MdOutlineCheckBox />
            ) : (
              <MdOutlineCheckBoxOutlineBlank />
            )}
          </span>
        ) : null}
        {checked === true && type === "checkbox" ? (
          <span className="note-text line-through">{text}</span>
        ) : (
          <span className="note-text">{text}</span>
        )}
      </div>
      <div className="note-bottom">
        <span className="note-date">{date}</span>
        <div className="align-center">
          <FiCopy
            className="copy-icon icon-hvr"
            onClick={() => handleCopyNote(id)}
          />
          <AiFillDelete
            className="note-delete icon-hvr"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
