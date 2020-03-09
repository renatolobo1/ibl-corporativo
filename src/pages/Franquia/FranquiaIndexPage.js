import React, { Component } from 'react';
import './Franquia.scss'

import Nav from '../../components/Nav/Nav';
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
import axios from "axios";

class FranquiaIndexPage extends Component {

  componentDidMount() {
    this.load();
  }

  load = async () => {
    try {
      await axios.get(`https://www.iblsemlegenda.com.br`);
      // alert(response.status)
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav sobre="false"/>
        <SlideShow />
        {/* <Banner /> */}
        <Languages />
        {/* <Unit /> */}
        <FindUnit />
        <Valencia />
        <MainContact />
        <Certifications />
        <Footer />
      </div>
    );
  }
}

export default FranquiaIndexPage;
