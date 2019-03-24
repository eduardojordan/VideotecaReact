import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './Nav';
import logo from './logo.png';
import './header.css';

export class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to={'/'}><h1><img src={logo} alt="logo" /> </h1></Link>
        <Nav />
      </header>
    );
  }
}
