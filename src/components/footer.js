import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="fixed-bottom bg-light text-center">
      <nav className="navbar navbar-light bg-light justify-content-around">
        <NavLink to="/dashboard" className="nav-link" activeclassname="active">
          Dashboard
        </NavLink>
        <NavLink to="/transactions" className="nav-link" activeclassname="active">
          Transactions
        </NavLink>
        <NavLink to="/friends" className="nav-link" activeclassname="active">
          Friends
        </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
