import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ note, closeModal, updateNote }) => {

  const [title, setTitle] = useState(note ? note.title : "");
  const [text, setText] = useState(note ? note.text : "");

  if(!note){
    return null;
  }

  const handleClickOut = (e) => {
    if(e.target.classList.contains("modal")){
      handleSaveAndClose();
    }
  }

  const handleSaveAndClose = () => {
    if(title !== note.title || text !== note.text){
      updateNote(note.id, title, text);
    }
    closeModal()
  }

  return (
    <div className={`modal ${note ? "open-modal" : ""}`} onClick={handleClickOut}>
      <div className="modal-content">
        <div className="form-container">
          <form className="form" id="modal-form">
            <div className="note-title">
              <input type="text" placeholder="Title" id="modal-title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <div className="tooltip">
                <span className="material-symbols-outlined hover">keep</span>
                <span className="tooltip-text">Pin note</span>
              </div>
            </div>
            <div className="note-text">
              <input type="text" placeholder="Note" id="modal-text" value={text} onChange={(e) => setText(e.target.value)} />
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
              </div>
              <div className="footer-btn">
                <button className="close-btn" type="button" id="modal-btn" onClick={handleSaveAndClose}>
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default Modal;
