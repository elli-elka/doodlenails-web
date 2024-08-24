import React from "react";
import "./Bookings.css";

function Bookings() {
  return (
    <div className="bookings-page">
      
      <a className="session" href="/session-work">SESSION WORK</a>
      <br/>
      <br/>
      <a className="private" href="/private">PRIVATE CLIENTS</a>
    </div>
  );
};

export default Bookings;
