import React, { Component } from 'react';
import HTML from '../../Assets/Logos/HTML-Logo.png';
import CSSLogo from '../../Assets/Logos/CSS-Logo.png';
import JS from '../../Assets/Logos/JS-Logo.png';
import ReactJS from '../../Assets/Logos/reactjs-Logo.png';
import NodeJS from '../../Assets/Logos/nodejslogo.png';
import PostgreSQL from '../../Assets/Logos/postgreSQL.png';
import MongoDB from '../../Assets/Logos/mongo-logo.png';
import Mocha from '../../Assets/Logos/mocha-logo.png';
import ExpressJS from '../../Assets/Logos/express-logo.png';
import JQuery from '../../Assets/Logos/jquery-logo.png';
import Github from '../../Assets/Logos/githubLogo.png';

import './Bio.css';

export default class Bio extends Component {
  render() {
    return (
      <section className='about-me'>
        <h1>About Me</h1>
        <h3>I am a full-stack web developer and 
                  recent graduate of the engineering immersion course at Thinkful.</h3> 
        <p>The innovation and collaboration involved in creating applications 
                  I use daily sparked my desire to work on a team of
                  great programmers working tirelessly develop our own. I love learning how things are created, 
                  how things function, and how they are used. As a developer, I can experience 
                  all three of these at once.</p>
        <p>When I’m not coding, you can find me making music, playing video games,
                  spending much needed time outdoors, or just relaxing with my two cats and a good book.</p>
        <h4>My programming skills include:</h4>
        <div className='skill-logos'>
          <img src={HTML} alt='HTML logo' />
          <img src={CSSLogo} alt='CSS logo' />
          <img src={JS} alt='JavaScript logo' />
          <img src={ReactJS} alt='ReactJS logo' />
          <img src={NodeJS} alt='NodeJS logo' />
          <img src={PostgreSQL} alt='PostgreSQL logo' />
          <img src={MongoDB} alt='MongoDB logo' />
          <img src={Mocha} alt='Mocha logo' />
          <img src={ExpressJS} alt='ExpressJS logo' />
          <img src={JQuery} alt='jQuery logo' />
          <img src={Github} alt='Github logo'  width='150px'/>
        </div>
      </section>
    )
  }
}