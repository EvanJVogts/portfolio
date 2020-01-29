import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Bio from '../../Components/Bio/Bio';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Bio />
        <Link to={'/projects'}>See My Projects Here!</Link>
        <Footer />
      </div>
    )
  }
}