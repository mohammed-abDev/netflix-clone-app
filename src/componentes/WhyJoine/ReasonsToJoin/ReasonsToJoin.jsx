import React from 'react'
import './ReasonsToJoin.css'


function ReasonsToJoin({ title, description, icon }) {
  return (
    <>
      <div className="reason-card">
        <div className="reason-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="reason-icon">{icon}</div>
        </div>
      </div>
    </>
  );
}

export default ReasonsToJoin
