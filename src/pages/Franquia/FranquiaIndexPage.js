import React, { Component } from 'react';
import './Franquia.scss'

import Nav from '../../components/Nav/Nav';
import Nav2 from '../../components/Nav2/Nav';
import NavFranquias from '../../components/NavFranquias/Nav';
import SlideShow from '../../components/SlideShow/SlideShow';
// import Banner from '../../components/Banner/Banner';
import Valencia from '../../components/Valencia/Valencia';
import Certifications from '../../components/Certifications/Certifications';
import MainContact from '../../components/MainContact';
import Languages from '../../components/Languages/Languages';
// import Unit from '../../components/Unit/Unit';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import FindUnit from '../../components/findUnit/findUnit';
import Agende from '../../components/Agende';

class FranquiaIndexPage extends Component {

  render() {
    return (
      <div className="">
        {/* <NavFranquias sobre="false"/> */}
        {/* <Nav2 sobre="false"/> */}
        <Topbar />
        <Nav sobre="false"/>
        <SlideShow />
        {/* <Banner /> */}
        <Languages />
        {/* <Unit /> */}
        <FindUnit />
        <Valencia />
        <MainContact />
        <Agende />
        <Certifications />
        <Footer />
      </div>
    );
  }
}

export default FranquiaIndexPage;
