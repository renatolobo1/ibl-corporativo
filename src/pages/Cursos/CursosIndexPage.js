import React, { Component } from 'react';
import './Cursos.scss'

import Nav from '../../components/Nav/Nav';
import SlideShow from '../../components/SlideShow/SlideShow';
import Valencia from '../../components/Valencia/Valencia';
import Certifications from '../../components/Certifications/Certifications';
import Languages from '../../components/Languages/Languages';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        <SlideShow />
        <Languages />
        <Valencia />
        <Certifications />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
