import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css'

const Sidebar = ({ isExpanded }) => {
  return (
  <div>
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
            <div className="sidebar-item active-item">
              <span className="material-symbols-outlined hover active">
                lightbulb_2
              </span>
              <span className="sidebar-text">Notes</span>
            </div>
            <div className="sidebar-item">
              <span className="material-symbols-outlined hover"> notifications </span>
              <span className="sidebar-text">Reminders</span>
            </div>
            <div className="sidebar-item">
              <span className="material-symbols-outlined hover"> edit </span>
              <span className="sidebar-text">Edit Labels</span>
            </div>
            <div className="sidebar-item">
              <span className="material-symbols-outlined hover"> archive </span>
              <span className="sidebar-text">Archive</span>
            </div>
            <div className="sidebar-item">
              <span className="material-symbols-outlined hover"> delete </span>
              <span className="sidebar-text">Trash</span>
            </div>
        </div>
  </div>
  )
}

Sidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default Sidebar
