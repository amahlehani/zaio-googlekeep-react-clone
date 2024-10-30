import React from 'react'
import PropTypes from "prop-types";
import Note from './Note/Note'
import './Notes.css'

const Notes = ({ notes, openModal, deleteNote }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} openModal={openModal} deleteNote={deleteNote}/>
      ))}
    </div>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default Notes
