import React, { Component } from 'react';

const ProjectContext = React.createContext({
  projectList: [],
  project: {},
  tech: [],
  repoLinks: [],
  setProject: () => {},
  setProjectList: () => {},
  setTech: () => {},
  clearTech: () => {},
  clearProject: () => {},
  setFrontRepo: () => {},
  clearFrontRepo: () => {},
  setBackendRepo: () => {},
  clearBackendRepo: () => {},
  setScreenshot: () => {},
  clearScreenshot: () => {},
  setLiveLink: () => {},
  clearLiveLink: () => {}
})
export default ProjectContext;

export class ProjectListProvider extends Component {
  state = {
    project: {},
    projectList: [],
    tech: [],
    frontRepo: '',
    backendRepo:'',
    screenshot: {},
    liveLink: '',
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
  setFrontRepo = frontRepo => {
    this.setState({frontRepo})
  }
  clearFrontRepo = () => {
    this.setState({frontRepo: ''})
  }
  setBackendRepo = backendRepo => {
    this.setState({backendRepo})
  }
  clearBackendRepo = () => {
    this.setState({backendRepo: ''})
  }
  setScreenshot = screenshot => {
    this.setState({screenshot})
  }
  clearScreenshot = () => {
    this.setState({screenshot: {}})
  }
  setLiveLink = liveLink => {
    this.setState({liveLink})
  }
  clearLiveLink = () => {
    this.setState({liveLink: ''})
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
      clearProject: this.clearProject,
      frontRepo: this.state.frontRepo,
      setFrontRepo: this.setFrontRepo,
      clearFrontRepo: this.clearFrontRepo,
      backendRepo: this.state.backendRepo,
      setBackendRepo: this.setBackendRepo,
      clearBackendRepo: this.clearBackendRepo,
      screenshot: this.state.screenshot,
      setScreenshot: this.setScreenshot,
      clearScreenshot: this.clearScreenshot,
      liveLink: this.state.liveLink,
      setLiveLink: this.setLiveLink,
      clearLiveLink: this.clearLiveLink
    }
    return (
      <ProjectContext.Provider value={value}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}