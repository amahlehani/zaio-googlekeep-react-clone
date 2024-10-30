import React from 'react';
import PropTypes from "prop-types";
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
        <div className="menu-icon">
          <div className="tooltip" onClick={onMenuClick} >
            <span className="material-symbols-outlined hover">
              menu
            </span>
            <span className="tooltip-text">Main menu</span>
          </div> 
        </div>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="google-keep logo" />
          <a href="https://keep.google.com/">
            <span className="keep-logo">Keep</span>
          </a>
        </div>
      <div className="searchbar">
        <form className="search">
          <button className="search-icon" type="button">
          <div className="tooltip">
            <span className="material-symbols-outlined hover">
              search
            </span>
            <span className="tooltip-text">Search</span>
          </div>
          </button>
          <input type="text" placeholder="Search" name="Search" />
        </form>
      </div>
      </div>
    <div className="nav-right">
      <div className="icons">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            refresh
          </span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            view_agenda
          </span>
          <span className="tooltip-text">List view</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            settings
          </span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            apps
          </span>
          <span className="tooltip-text">Google apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            account_circle
          </span>
          <span className="tooltip-text">Account</span>
        </div>
      </div>
    </div>
  </div>

  );
};

Navbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired
};

export default Navbar
