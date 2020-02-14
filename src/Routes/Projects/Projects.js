import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import ProjectList from '../../Components/ProjectComponents/ProjectList/ProjectList';
import ProjectHeader from '../../Components/ProjectComponents/ProjectsHeader/ProjectsHeader';
import ProjectContext from '../../Contexts/ProjectContext';
import ProjectStore from '../../Components/ProjectComponents/ProjectStore';
import Bio from '../../Components/Bio/Bio';
import './Projects.css';

export default class Projects extends Component {
  static contextType = ProjectContext
  componentDidMount() {
    this.context.setProjectList(ProjectStore)
  }
  renderProjects() {
    const { projectList = [] } = this.context
    return projectList.map(project =>
      <ProjectList 
        key={project.id}
        project={project}/>
    )
  }
  render() {
    return (
      <div>
        <NavBar />
        <Bio />
        <section className='projects'>
          <ProjectHeader />
            {this.renderProjects()}
          <p className='contact-button'>If these interest you, feel free to <Link to='/contact'>contact me!</Link></p>
        </section>
      </div>
    )
  }
}