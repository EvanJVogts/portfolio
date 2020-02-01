import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';

export default class ProjectList extends Component {
  render() {
    const { project } = this.props
    return (
      <Link to={`/project/${project.id}`} className='single-project'>
        <div>
          <h3>{project.title}</h3>
          <p>{project.date}</p>
          <p>{project.overview}</p>
        </div>
      </Link>
    )
  }
}