import React from 'react';
import { Link } from 'react-router-dom';
import AccessibilityWidget from './AccessibilityWidget';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/projects">Projects</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <AccessibilityWidget />
    </header>
  );
}

export default Header;