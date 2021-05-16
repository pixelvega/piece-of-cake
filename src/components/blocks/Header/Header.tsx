import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span className="logo">PIECE OF CAKE</span>
            </NavLink>
          </li>
          <li className="link-text">
            <NavLink to="/learn">Learn</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header