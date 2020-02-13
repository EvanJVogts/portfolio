import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';

export default class ProjectList extends Component {
  render() {
    const { project } = this.props
    console.log(project)
    return (
      <div className='short-info'>
        <Link to={`/project/${project.id}`} className='single-project'>
        <div className='small-pic'>
          <img src={project.screenshot} alt='project screenshot'/>
        </div>
          <div className='project-button'>
            <div className='small-details'>
              <h3>{project.title}</h3>
              <p>{project.date}</p>
              <p>{project.overview}</p>
            </div>
          </div>
        </Link>
        {/* <a href={project.liveLink}>Live Link</a> */}
      </div>
    )
  }
}