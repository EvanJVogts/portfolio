import React, { Component } from 'react';
import HtmlLogo from '../../Assets/Logos/HTML-Logo.png';
import CssLogo from '../../Assets/Logos/CSS-Logo.png';
import JsLogo from '../../Assets/Logos/JS-Logo.png';

export default class ProjectDetail extends Component {
  renderTech = (project) => {
    if (project.technology === 'HTML') {
      return (
        <div>
          <img src={HtmlLogo} alt={'HTML Logo'} />
        </div>
      )
    } else if (project.technology === 'HTML, CSS') {
      return (
        <div>
          <img src={HtmlLogo} alt={'HTML Logo'} />
          <img src={CssLogo} alt={'CSS Logo'} />
        </div>
      )
    } else if (project.technology === 'HTML, CSS, JS') {
      return (
        <div>
          <img src={HtmlLogo} alt={'HTML Logo'} />
          <img src={CssLogo} alt={'CSS Logo'} />
          <img src={JsLogo} alt={'Javascript Logo'} />
        </div>
      )
    }
  }
  render() {
    const { project } = this.props
    return (
      <div>
        <section>
        <h3>{project.title}</h3>
        <label htmlFor='desc'>Description</label>
        <textarea>{project.description}</textarea>
        <textarea>{project.userStories}</textarea>
        {this.renderTech}
        </section>
      </div>
    )
  }
}