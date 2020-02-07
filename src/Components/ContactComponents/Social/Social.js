import React, { Component } from 'react';
import GitHubLogo from '../../../Assets/Logos/githubLogo.png';
import LinkedInLogo from '../../../Assets/Logos/LinkedInLogo.png';
import './Social.css';

export default class Social extends Component {
  render() {
    return (
      <div className='social'>
        <h3>Connect on LinkedIn and GitHub!</h3>
        <a href='https://github.com/EvanJVogts' target='_blank' rel='noopener noreferrer'><img src={GitHubLogo} alt='GitHub Logo'/></a>
        <a href='https://www.linkedin.com/in/evanvogts/' target='_blank' rel='noopener noreferrer'><img src={LinkedInLogo} alt='LinkedIn Logo'/></a>
      </div>
    )
  }
}