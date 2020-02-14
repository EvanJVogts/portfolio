import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';
// import expandButton from '../../../Assets/Icons/expand.png';

export default class ProjectList extends Component {
  renderBackRepo() {
    const { project } = this.props
    if (project.backRepo === '') {
      return
    } else {
      return (
        <a href={project.backRepo} target='_blank' rel='noopener noreferrer'>Backend Repo</a>
      )
    }
  }
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
            <p>{project.description}</p>
          </section>
        </div>
        {/* <img src={expandButton} alt='expand button' className='expand-button' /> */}
        </Link>
        <div className='live-link-small'>
          <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>Live Link</a>
          <a href={project.frontRepo} target='_blank' rel='noopener noreferrer'>Frontend Repo</a>
          {this.renderBackRepo()}
        </div>
      </section>
    )
  }
}