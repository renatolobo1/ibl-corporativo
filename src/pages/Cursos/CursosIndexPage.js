import React, { Component } from 'react';
import './Cursos.scss'
import Navegacao from '../../components/Navegacao/Navegacao';
import BarraDeTopo from '../../components/BarraDeTopo/BarraDeTopo';
import Rodape from '../../components/Rodape/Rodape';

class CursosIndexPage extends Component {
    
  render() {
    return (
      <div className="">
        <BarraDeTopo />
        <Navegacao />
        Conteudo da pagnpm 
        <Rodape />
      </div>
    );
  }
}

export default CursosIndexPage;