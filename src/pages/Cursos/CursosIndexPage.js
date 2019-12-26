import React, { Component } from 'react';
import './Cursos.scss'
import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';

class CursosIndexPage extends Component {
    
  render() {
    return (
      <div className="">
        <Topbar />
        <Nav />
        Conteudo da pagnpm 
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;