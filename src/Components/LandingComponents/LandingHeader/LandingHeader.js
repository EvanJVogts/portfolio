import React, { Component } from 'react';
import Hero from '../../../Assets/Photos/Me.png';

export default class LandingHeader extends Component {
  render() {
    return (
      <div>
        <img src={Hero} alt={'Evan Vogts'}/>
        <h1>Evan Vogts</h1>
      </div>
    )
  }
}