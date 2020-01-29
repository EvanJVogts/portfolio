import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectList extends Component {
  render() {
    const { project } = this.props
    return (
      <Link to={`/project/${project.id}`}>
        <div>
          <h3>{project.title}</h3>
          <p>{project.date}</p>
          <p>{project.overview}</p>
        </div>
      </Link>
    )
  }
}