import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Forms.css';
import Modal from '../Modal/Modal';


const Forms = ({ addNote }) => {

    const [isActiveForm, setIsActiveForm] = useState(false);
    const [title, setTitle] = useState("");
    const [text,setText] = useState("");

    const clearInputs = () => {
      setTitle("");
      setText("");
    }

    const handleFormClick = () => {
      setIsActiveForm(true);

      setTimeout(() => {
        const textInput = document.getElementById("textInput");

        if(textInput){
          textInput.focus();
        }
      }, 0);  

      document.addEventListener("mousedown", handleDocumentClick)
    };

    const handleClose = () => {
      const currentTitle = document.getElementById("titleInput")?.value || "";
      const currentText = document.getElementById("textInput")?.value || "";
      if(currentTitle || currentText) {
        addNote(currentTitle, currentText);
      }
        clearInputs();
        setIsActiveForm(false);

        document.removeEventListener("mousedown", handleDocumentClick)
    };

    const handleDocumentClick = (event) => {
      if(!event.target.closest(".active-form-container")) {
        handleClose();
      }
    }

  return (
    <div className="main-content">
      <div
        className={`inactive-form-container inactive-form ${
          isActiveForm ? "hidden" : ""
        }`}
        onClick={handleFormClick}
      >
        <form>
          <input
            className="note-text"
            type="text"
            placeholder="Take a note..."
            name="note-text"
          />
          <div className="inactiveform-icons">
            <div className="tooltip">
              <span className="material-symbols-outlined hover">check_box</span>
              <span className="tooltip-text">New list</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">brush</span>
              <span className="tooltip-text">New note with drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">image</span>
              <span className="tooltip-text">New note with image</span>
            </div>
          </div>
        </form>
      </div>
      <div className="active-form-container">
        <form
          className={`active-form form" id="form ${
            isActiveForm ? "visible" : ""
          }`}
        >
          <div className="note-title">
            <input
              id="titleInput"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="tooltip">
              <span className="material-symbols-outlined hover">keep</span>
              <span className="tooltip-text">Pin note</span>
            </div>
          </div>
          <div className="note-text">
            <input
              id="textInput"
              type="text"
              placeholder="Take a note..."
              value={text}
              autoFocus={isActiveForm}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="note-icons-footer">
            <div className="footer-icons">
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
              <div className="tooltip">
                <span className="material-symbols-outlined hover footer-icon">
                  archive
                </span>
                <span className="tooltip-text">Archive</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover footer-icon">
                  more_vert
                </span>
                <span className="tooltip-text">More</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover footer-icon undo">
                  undo
                </span>
                <span className="tooltip-text">Undo</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover footer-icon redo">
                  redo
                </span>
                <span className="tooltip-text">Redo</span>
              </div>
              <div className="footer-btn">
                <button
                  className="close-btn"
                  type="button"
                  id="close-form-btn"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Modal />
    </div>
  );
}

Forms.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default Forms
