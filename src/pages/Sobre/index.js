import React, { Component } from 'react';
import './Sobre.scss'

import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        <About />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
