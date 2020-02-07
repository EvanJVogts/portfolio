import React, { Component } from 'react';
import './ProjectsHeader.css';

export default class ProjectHeader extends Component {
  render() {
    return (
      <div className='projects-header'>
        <h1>My Projects</h1>
        <h2>Below is a list of projects I have built from the ground up:</h2>
      </div>
    )
  }
}