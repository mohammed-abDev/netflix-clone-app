import React, { useEffect, useState } from 'react'
import './FAQ.css'
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function FAQ( {Questions,Answer} ) {
  const [isOpen, setisOpen] = useState(false);

  const toggleAnswer = ()=>{
     setisOpen(!isOpen);
  }

  return (
    <>
      <div className="FAQ-Questions">
        <h2>{Questions}</h2>
        <button className="toggle-icon" onClick={toggleAnswer}>
          {!isOpen ? <AddIcon /> : <CloseIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="FAQ-Answer-container">
          <div>
            <p>{Answer}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FAQ
