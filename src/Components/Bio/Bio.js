import React, { Component } from 'react';
import './Bio.css';

export default class Bio extends Component {
  render() {
    return (
      <section className='about-me'>
        <h1>About Me</h1>
        <h3>	I am a web/software developer and 
                  recent graduate of the engineering immersion course at Thinkful.</h3> 
        <p>The innovation and collaboration involved in creating applications 
                  I use daily sparked my desire to work on a team of
                  great programmers working tirelessly develop our own. I love learning how things are created, 
                  how things function, and how they are used. As a developer, I can experience 
                  all three of these at once.</p>
        <p>When I’m not coding, you can find me making music, playing video games,
                  spending much needed time outdoors, or just relaxing with my two cats and a good book.</p>
        <p>My programming skills include: HTML, CSS, JavaScript, Jquery, React, and intend to learn much more.</p>
      </section>
    )
  }
}