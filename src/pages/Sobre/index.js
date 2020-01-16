import React, { Component } from 'react';
import './Sobre.scss'

import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import Curso from '../../components/Curso/Curso';

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        <Curso />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
