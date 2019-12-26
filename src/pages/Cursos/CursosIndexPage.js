import React, { Component } from 'react';
import './Cursos.scss'
import Navegacao from '../../components/Navegacao/Navegacao';
import BarraDeTopo from '../../components/BarraDeTopo/BarraDeTopo';
import Rodape from '../../components/Rodape/Rodape';
import SlideShow from '../../components/SlideShow/SlideShow'

class CursosIndexPage extends Component {

  render() {
    return (
      <div className="">
        <BarraDeTopo />
        <Navegacao />
        <SlideShow />
        Conteudo da pagnpm
        <Rodape />
      </div>
    );
  }
}

export default CursosIndexPage;
