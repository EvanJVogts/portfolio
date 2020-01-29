import React, { Component } from 'react';
import ProjectContext from '../../../Contexts/ProjectContext';
import './ProjectDetails.css';

export default class ProjectDetails extends Component {
  static contextType = ProjectContext
  renderTechLogos = () => {
    console.log(this.context.tech)
    let projectTech = this.context.tech
    return projectTech.map((tech) =>
    <li>
      <img src={tech} alt='tech logo'/>
    </li>
    )
  }
  render() {
    const {project} = this.context
    return (
      <section>
        <div>
          <h1>{project.title}</h1>
        </div>
        <div>
          <h2>{project.overview}</h2>
          <h3>{project.description}</h3>
          <p>{project.stories}</p>
        </div>
        <div>
          <h2>Technologies Used</h2>
          <div className='tech-logos'>
            {this.renderTechLogos()}
          </div>
        </div>
      </section>
    )
  }
}