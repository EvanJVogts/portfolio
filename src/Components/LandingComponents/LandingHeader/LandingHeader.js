import React, { Component } from 'react';
import Hero from '../../../Assets/Photos/Me.png';
import './LandingHeader.css';

export default class LandingHeader extends Component {
  render() {
    return (
      <section className='landing-header'>
        <img src={Hero} alt={'Evan Vogts'} />
        <h1>Evan Vogts</h1>
      </section>
    )
  }
}