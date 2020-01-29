import React, { Component } from 'react';

const ProjectContext = React.createContext({
  projectList: [],
  project: {},
  tech: [],
  setProject: () => {},
  setProjectList: () => {},
  setTech: () => {},
  clearTech: () => {},
  clearProject: () => {}
})
export default ProjectContext;

export class ProjectListProvider extends Component {
  state = {
    project: {},
    projectList: [],
    tech: []
  };
  setProjectList = projectList => {
    this.setState({ projectList })
  }
  setProject = project => {
    this.setState({ project })
  }
  clearProject = () => {
    this.setState({ project: {}})
  }
  setTech = tech => {
    this.setState({ tech })
  }
  clearTech = () => {
    this.setState({tech: []})
  }
  render() {
    const value = {
      projectList: this.state.projectList,
      setProjectList: this.setProjectList,
      setProject: this.setProject,
      project: this.state.project,
      tech: this.state.tech,
      setTech: this.setTech,
      clearTech: this.clearTech,
      clearProject: this.clearProject
    }
    return (
      <ProjectContext.Provider value={value}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}