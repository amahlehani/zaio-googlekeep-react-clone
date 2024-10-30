import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Note.css";

const Note = ({ note, openModal, deleteNote }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
    setIsMenuOpen(false); 
    document.removeEventListener("mousedown", handleDocumentClick);
  }

  const handleDocumentClick = (event) => {
    if(!event.target.closest(".popup-menu") && !event.target.closest(".footer-icon")) {
      setIsMenuOpen(false);
      document.removeEventListener("mousedown", handleDocumentClick);
    }
  }

  const toggleMenu = (e) => {
    e.stopPropagation();
    if(!isMenuOpen) {
      setIsMenuOpen(true);
      document.addEventListener("mousedown", handleDocumentClick)
    } else {
      setIsMenuOpen(false);
      document.removeEventListener("mousedown", handleDocumentClick)
    }
  }

  return (
    <div className="note" onClick={() => openModal(note)}>
      <div className="tooltip">
        <span className="material-symbols-outlined check-circle">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTIsMiBDMTcuNTIsMiAyMiw2LjQ4IDIyLDEyIEMyMiwxNy41MiAxNy41MiwyMiAxMiwyMiBDNi40OCwyMiAyLDE3LjUyIDIsMTIgQzIsNi40OCA2LjQ4LDIgMTIsMiBaIE0xMCwxNC4yIEw3LjQsMTEuNiBMNiwxMyBMMTAsMTcgTDE4LDkgTDE2LjYsNy42IEwxMCwxNC4yIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJjaGVja19jaXJjbGVfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgcG9pbnRzPSIwIDAgMjQgMCAyNCAyNCAwIDI0Ij48L3BvbHlnb24+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGlkPSJNYXNrIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgPC9nPgo8L3N2Zz4K"
            alt="select note icon"
          />
        </span>
        <span className="tooltip-text">Select note</span>
      </div>
      <div className="note-title">{note.title}</div>
      <div className="note-text">{note.text}</div>
      <div className="note-footer-icons">
        <div className="tooltip">
          <span className="material-symbols-outlined hover footer-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover footer-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover footer-icon">
            palette
          </span>
          <span className="tooltip-text">Background options</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover footer-icon">
            image
          </span>
          <span className="tooltip-text">Add image</span>
        </div>
        <div className="tooltip archive">
          <span className="material-symbols-outlined hover footer-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span
            className="material-symbols-outlined hover footer-icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu(e);
            }}
          >
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
        {isMenuOpen &&
        (<div className="popup-menu">
          <button onClick={handleDelete}>Delete note</button>
          <button>Add label</button>
          <button>Add drawing</button>
          <button>Make a copy</button>
          <button>Show tick boxes</button>
          <button>Copy to Google Docs</button>
          <button>Version history</button>
        </div>)}
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default Note;
