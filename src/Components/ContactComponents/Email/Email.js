import React, { Component } from 'react';
import './Email.css';

export default class Email extends Component {
  render() {
    return (
      <div className='email'>
        <p>
          Want to contact me directly? Feel free to send me an email!
        </p>
        <h3><a href="mailto:evanjvogts@gmail.com?Subject=subject&body=Body">evanjvogts@gmail.com</a></h3>
      </div>
    )
  }
}