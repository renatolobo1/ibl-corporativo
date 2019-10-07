import React, { Component } from 'react';
import './BarraDeTopo.scss'

class BarraDeTopo extends Component {
    
  render() {
    return (
      <div id="barra-de-topo">
        <a href="#">Portal do Aluno</a>
        <a href="#">Portal do Franqueado</a>
        <div className="nav-social">
          <a href="#">
            <div className="icone facebook">facebook</div>
          </a>
          <a href="#">
            <div className="icone instagram">instagram</div>
          </a>
          <a href="#">
            <div className="icone youtube">youtube</div>
          </a>
        </div>
      </div>
    );
  }
}

export default BarraDeTopo;