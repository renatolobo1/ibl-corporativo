import React, { Component } from 'react';
import './Certifications.scss';
import toeflitp from './toefl itp.png'
import toeic from './toeic.png'
import tfi from './tfi.png'


class Certifications extends Component {

  render() {
    return (
      <div id="certifications" className="container">
        <div className="text child">
          <p>Certificações</p>
          <p>Internacionais</p>
        </div>
        <img className="certification-image child" src={toeflitp} alt=""/>
        <img className="certification-image child" src={toeic} alt=""/>
        <img className="certification-image child" src={tfi} alt=""/>

      </div>
    );
  }
}

export default Certifications;
