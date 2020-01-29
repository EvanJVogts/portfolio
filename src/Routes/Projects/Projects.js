import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import ProjectList from '../../Components/ProjectComponents/ProjectList/ProjectList';
import ProjectHeader from '../../Components/ProjectComponents/ProjectsHeader/ProjectsHeader';
import ProjectContext from '../../Contexts/ProjectContext';
import ProjectStore from '../../Components/ProjectComponents/ProjectStore';

export default class Projects extends Component {
  static contextType = ProjectContext
  constructor(props) {
    super(props)
    this.state = {
      projectList: []
    }
  }
  componentDidMount() {
    this.context.clearProject()
    this.context.setProjectList(ProjectStore)
    this.context.clearTech()
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
        <div>
          <ProjectHeader />
          <ol>
            {this.renderProjects()}
          </ol>
        </div>
        <Footer />
      </div>
    )
  }
}