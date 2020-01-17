import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import ProjectHeader from '../../Components/ProjectsHeader/ProjectsHeader';
import ProjectDetail from '../../Components/ProjectDetail/ProjectDetail';

export default class Projects extends Component {
  renderProjects() {
    const { projectList = [] } = this.context
    return projectList.map(project =>
      <ProjectDetail 
        key={project.id}
        project={project}/>)
  }
  render() {
    return (
      <div>
        <NavBar />
        <ProjectHeader />
        {this.renderProjects}
        <Footer />
      </div>
    )
  }
}