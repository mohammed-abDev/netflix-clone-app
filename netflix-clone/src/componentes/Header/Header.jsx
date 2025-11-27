import React from 'react'
import "./Header.css"
import { Select, MenuItem } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import netflixLogo from "../../assets/images/Netflix_Logo_PMS.png";


function Header() {
  return (
    <>
      <nav className="outer-header">
        <div className="logo">
          <img src={netflixLogo} alt="Company Logo" />
        </div>
        <div className="right-side">
          <Select
            defaultValue="en"
            id="language-select"
            className="language-select"
          >
            <MenuItem value="en" className="menu-item">
              <TranslateIcon className="menu-icon" />
              English
            </MenuItem>
            <MenuItem value="fr" className="menu-item">
              <TranslateIcon className="menu-icon" />
              French
            </MenuItem>
            <MenuItem value="es" className="menu-item">
              <TranslateIcon className="menu-icon" />
              Spanish
            </MenuItem>
          </Select>

          <button>Sign In</button>
        </div>
      </nav>
    </>
  );
}

export default Header
