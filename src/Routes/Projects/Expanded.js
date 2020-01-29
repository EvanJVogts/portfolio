import React, { Component } from 'react';
import ProjectContext from '../../Contexts/ProjectContext';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import ProjectDetails from '../../Components/ProjectComponents/ProjectDetails/ProjectDetails';
import ProjectStore from '../../Components/ProjectComponents/ProjectStore';
import { Link } from 'react-router-dom';

export default class Expanded extends Component {
  static contextType = ProjectContext
  static defaultProps = {
    match: { params: {} },
  }
  componentDidMount() {
    const { projectId } = this.props.match.params
    this.context.clearProject()
    this.context.setProject(ProjectStore[projectId])
    this.context.clearTech()
    this.context.setTech(ProjectStore[projectId].tech)
  }
  render() {
    return (
      <div>
        <NavBar />
        <ProjectDetails />
        <Link to='/projects'>Back</Link>
        <Footer />
      </div>
    )
  }
}