import React, { Component } from 'react';
import './Blog.scss'

import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import News from '../../components/News/News';

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        <News />

        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
