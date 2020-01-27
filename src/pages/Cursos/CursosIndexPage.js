import React, { Component } from 'react';
import './Cursos.scss'

import Nav from '../../components/Nav/Nav';
import SlideShow from '../../components/SlideShow/SlideShow';
import Banner from '../../components/Banner/Banner';
import Valencia from '../../components/Valencia/Valencia';
import Certifications from '../../components/Certifications/Certifications';
import Contact from '../../components/Contact/Contact';
import Languages from '../../components/Languages/Languages';
import Unit from '../../components/Unit/Unit';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar
          unit="Unidade Farol"
        />
        <Nav
          sobre="false"
        />
        {/* <SlideShow /> */}
        <Banner />
        <Languages />
        <Unit />
        <Valencia />
        <Contact />
        <Certifications />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
