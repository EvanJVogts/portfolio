import React, { Component } from 'react';
import LandingHeader from '../../Components/LandingComponents/LandingHeader/LandingHeader';
import LandingSub from '../../Components/LandingComponents/LandingSubtitle/LandingSubtitle';
import Footer from '../../Components/Footer/Footer';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <LandingSub />
        <Footer />
      </div>
    )
  }
}