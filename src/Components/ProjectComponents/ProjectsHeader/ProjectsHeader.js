import React, { Component } from 'react';
import './ProjectsHeader.css';

export default class ProjectHeader extends Component {
  render() {
    return (
      <div className='projects-header' id='projects'>
        <h2>My Projects</h2>
        <h3>Below are the projects I have build from the ground up:</h3>
      </div>
    )
  }
}