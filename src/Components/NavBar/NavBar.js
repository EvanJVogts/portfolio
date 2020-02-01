import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='nav-bar'>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    )
  }
}