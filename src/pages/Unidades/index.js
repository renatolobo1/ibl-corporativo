import React, { Component } from 'react';
import './Unidades.scss'

import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import UnitsList from '../../components/UnitsList/UnitsList';

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        <UnitsList />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
