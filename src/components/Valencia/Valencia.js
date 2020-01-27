import React, { Component } from 'react';
import './Valencia.scss';
import valencia from './valencia-logo.jpg'
import { HashLink as Link } from 'react-router-hash-link';


class Valencia extends Component {

  render() {
    return (
      <div id="valencia">
        <div id="background"></div>
        <div id="content">
          <div className="parceria-container">
            <p className="parceria">
              Parceria Internacional
            </p>
            <img src={valencia} alt="valencia-college"/>
            <p className="txt">
              O Instituto Brasileiro de Línguas prepara o aluno e facilita o
              caminho para que ele estude numa das maiores faculdades dos EUA.
            </p>
          </div>
          <div id="study">
            <div className="text">
              <p className="yellow">study in</p>
              <p>Orlando,</p>
              <p>Florida</p>
            </div>
            <Link className="button" to="#topbar">
              <p className="faca">Faça sua inscrição e</p>
              <p className="saiba">Saiba mais</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Valencia;
