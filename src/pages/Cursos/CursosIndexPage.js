import React, { Component } from 'react';
import './Cursos.scss'

import Nav from '../../components/Nav/Nav';
import SlideShow from '../../components/SlideShow/SlideShow';
import Valencia from '../../components/Valencia/Valencia';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        <SlideShow />
        <Valencia />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
