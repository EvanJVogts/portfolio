import React, { Component } from 'react';
import ProjectContext from '../../Contexts/ProjectContext';
import NavBar from '../../Components/NavBar/NavBar';
import ProjectDetails from '../../Components/ProjectComponents/ProjectDetails/ProjectDetails';
import ProjectStore from '../../Components/ProjectComponents/ProjectStore';
import { Link } from 'react-router-dom';
import './Expanded.css';

export default class Expanded extends Component {
  static contextType = ProjectContext
  static defaultProps = {
    match: { params: {} },
  }
  componentDidMount() {
    const { projectId } = this.props.match.params
    let project = ProjectStore[projectId]
    this.context.clearProject()
    this.context.setProject(project)
    this.context.clearTech()
    this.context.setTech(project.tech)
    this.context.clearFrontRepo()
    this.context.setFrontRepo(project.frontRepo)
    this.context.clearBackendRepo()
    this.context.setBackendRepo(project.backRepo)
    this.context.clearScreenshot()
    this.context.setScreenshot(project.screenshot)
    this.context.clearLiveLink()
    this.context.setLiveLink(project.liveLink)
  }
  render() {
    return (
      <div className='expanded'>
        <NavBar />
        <ProjectDetails />
        <Link to='/projects'>Back</Link>
      </div>
    )
  }
}