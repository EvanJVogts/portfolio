import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to='/'><h1 className='nav-name'>EV</h1></Link>
        <nav className='nav-bar'>
          <a href='https://portfolio.evanjvogts.now.sh/projects#about'>About Me</a>
          <a href='https://portfolio.evanjvogts.now.sh/projects#projects'>Projects</a>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    )
  }
}