import React from 'react';
import './Navigation.css';


function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bookings">Bookings</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/portfolio">Portfolio</a>
        </li>
        </ul>
      </div>
    </nav>  

          

          

          
    </>
  );
}

export default Navigation;
