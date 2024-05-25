// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        <li>
          <Link to="/add-property">Add Property</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
