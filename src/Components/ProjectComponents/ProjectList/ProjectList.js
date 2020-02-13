import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';
import expandButton from '../../../Assets/Icons/expand.png';

export default class ProjectList extends Component {
  render() {
    const { project } = this.props
    return (
      <section className='short-info'>
        <Link to={`/project/${project.id}`} className='single-project'>
        <div className='small-pic'>
          <img src={project.screenshot} alt='project screenshot'/>
        </div>
        <div className='project-button'>
          <section className='small-details'>
            <h3>{project.title}</h3>
            <p>{project.date}</p>
            <p>{project.overview}</p>
          </section>
        </div>
        <img src={expandButton} alt='expand button' className='expand-button' />
        </Link>
      </section>
    )
  }
}