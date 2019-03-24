import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom'

export class Nav extends React.Component {
  render() {
    return(
      <nav className="menu">
      <ul className="menu__options">
      
       <li className="menu__option">
      <NavLink activeClassName='menu__link--active'
      className="menu__link" to= '/'>Home</NavLink>
      </li>
      
      <li className= 'menu__option'>
      <NavLink activeClassName='menu__link--active'
           className= 'menu__link' to= '/collections'>Collections</NavLink>
      </li>
     
      </ul>
      </nav>
    );
  }
}
