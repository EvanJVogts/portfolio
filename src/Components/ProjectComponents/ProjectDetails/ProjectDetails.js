import React, { Component } from 'react';
import ProjectContext from '../../../Contexts/ProjectContext';
import './ProjectDetails.css';

export default class ProjectDetails extends Component {
  static contextType = ProjectContext
  componentDidMount() {
    window.scrollTo(0,0)
  }
  renderTechLogos = () => {
    let projectTech = this.context.tech
    return projectTech.map((tech) =>
    <div className='tech-div'>
      <img src={tech} alt='tech logo'/>
    </div>
    )
  }
  renderFrontendRepo = () => {
    let frontRepo = this.context.frontRepo
    return (
      <a href={frontRepo} target='_blank' rel='noopener noreferrer'>
        Frontend Code
      </a>
    )
  }
  renderBackendRepo = () => {
    let backendRepo = this.context.backendRepo
    if (backendRepo === '') {
      return
    } else {
      return (
        <a href={backendRepo} target='_blank' rel='noopener noreferrer'>
          Backend Code
        </a>
      )
    }
  }
  renderScreenshot = () => {
    let screenshot = this.context.screenshot
    return (
      <img src={screenshot} alt='example screen from app' className='app-screenshot'/>
    )
  }
  renderLiveLink = () => {
    let appLink = this.context.liveLink
    return (
      <a href={appLink} target='_blank' rel='noopener noreferrer'>Link to the live app</a>
    )
  }
  render() {
    const {project} = this.context
    return (
      <section className='project-details'>
        <div>
          <h1>{project.title}</h1>
        </div>
        <div className='project-description'>
          <h2>{project.overview}</h2>
          <h3>{project.description}</h3>
          <p>{project.stories}</p>
          <div className='live-link'>
            {this.renderLiveLink()}
          </div>
        </div>
        <div className='screenshot-border'>
          {this.renderScreenshot()}
        </div>
        <div>
          <h2>Technologies Used</h2>
          <div className='tech-logos'>
            {this.renderTechLogos()}
          </div>
        </div>
        <div className='repo-links'>
          {this.renderFrontendRepo()}
          {this.renderBackendRepo()}
        </div>
      </section>
    )
  }
}