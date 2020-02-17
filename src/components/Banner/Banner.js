import React, { Component } from 'react';
import './Banner.scss';
// import banner from './Site-Unidades.png'
import SignForm from '../SignForm/SignForm';

class Banner extends Component {

  render() {
    return (
      <div 
        id="banner"
        style={{backgroundImage: `url(${this.props.cover})`}}
      >
        <div className="container">
          <SignForm />
        </div>
      </div>
    );
  }
}

export default Banner;
