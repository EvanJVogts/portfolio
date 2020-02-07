import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Bio from '../../Components/Bio/Bio';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NavBar />
        <Bio />
        <Link className='projects-button'to={'/projects'}>See My Projects Here!</Link>
      </div>
    )
  }
}