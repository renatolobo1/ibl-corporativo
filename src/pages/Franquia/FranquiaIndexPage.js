import React, { Component } from 'react';
import './Franquia.scss'

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
import FindUnit from '../../components/findUnit/findUnit';

class FranquiaIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        <SlideShow />
        {/* <Banner /> */}
        <Languages />
        {/* <Unit /> */}
        {/* <Valencia /> */}
        {/* <Contact /> */}
        <FindUnit />
        <Certifications />
        <Footer />
      </div>
    );
  }
}

export default FranquiaIndexPage;
