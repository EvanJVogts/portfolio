import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingSubtitle.css';

export default class LandingSub extends Component {
  render() {
    return (
      <div className='landing-subtitle'>
        <p>Hi, my name is Evan! I’m a web/software developer with a background in business to business sales.</p>
        <Link className='learn-button' to='projects'>Learn More About Me!</Link>
      </div>
    )
  }
}