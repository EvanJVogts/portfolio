import React, { Component } from 'react';
import LandingHeader from '../../Components/LandingComponents/LandingHeader/LandingHeader';
import LandingSub from '../../Components/LandingComponents/LandingSubtitle/LandingSubtitle';
import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <LandingHeader />
        <LandingSub />
      </div>
    )
  }
}