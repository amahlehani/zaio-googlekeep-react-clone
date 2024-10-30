import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Forms from './components/Forms/Forms';
import Notes from './components/Notes/Notes'; 
import Modal from './components/Modal/Modal'



const App = () => {
  const [notes, setNotes] = useState([{ id: 1, title: "Sample note", text: "this is a sample note"}]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  }

  const openModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  }

  const addNote = (title, text) => {
    const newNote = {
      id: notes.length + 1,
      title,
      text,
    }
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  const updateNote = (id, updateTitle, updateText) => {

    if(notes){  
      setNotes((prevNotes) => 
        prevNotes.map((note) =>
        note.id === id ? {...note, title: updateTitle, text: updateText} : note
        ) 
      );
    }
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="App">
      <Navbar onMenuClick={toggleSidebar} />
      <div className="container">
        <Sidebar isExpanded={isSidebarExpanded} />
        <div className="forms-and-notes">
          <Forms addNote={addNote}/>
          <Notes notes={notes} openModal={openModal} deleteNote={deleteNote} />
          {isModalOpen && <Modal note={selectedNote} closeModal={closeModal} updateNote={updateNote}/>}
        </div>
    </div>
  </div>
  );
};

export default App;
