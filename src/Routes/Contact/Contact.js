import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Email from '../../Components/ContactComponents/Email/Email';
import Social from '../../Components/ContactComponents/Social/Social';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className='contact'>
          <h1>Contact Info</h1>
          <Email />
          <Social />
        </section>
      </div>
    )
  }
}