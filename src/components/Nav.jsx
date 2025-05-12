import React from 'react';
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import neural from '../assets/neural-network.png';
import home from '../assets/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import stethoscope from '../assets/stethoscope_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

const Nav = () => {
  return (
    <nav className="nav-container">
      <h1 className="logo">
        <img src={stethoscope} alt="Logo" style={{ height: 32, marginRight: 8 }} />
        HealthWise AI
      </h1>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

      <ul className="nav-links">
        <li>
          <img src={home} alt="Home Icon" style={{ height: 24, marginRight: 6 }} />
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <img src={neural} alt="Algorithm Icon" style={{ height: 24, marginRight: 6 }} />
          <NavLink to="/algorithm">Algorithm</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
