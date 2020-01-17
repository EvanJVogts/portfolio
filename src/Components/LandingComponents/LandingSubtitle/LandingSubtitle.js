import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingSub extends Component {
  render() {
    return (
      <div>
        <p>Hi, my name is Evan! I’m a web/software developer with a background in business to business sales.</p>
        <Link to='home'>Learn More About Me!</Link>
      </div>
    )
  }
}