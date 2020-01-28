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
          unit={this.props.match.params.id}
        />
        <Nav
          sobre="false"
          // unit="unidade"
          unit={this.props.match.params.id}
          cursosUnidade={`/unidades/${this.props.match.params.id}`}
          blogUnidade={`/unidades/${this.props.match.params.id}`}
        />
        {/* <SlideShow /> */}
        <Banner />
        <Languages />
        <Unit unit={this.props.match.params.id} />
        <Valencia />
        <Contact unit={this.props.match.params.id} />
        <Certifications />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
