import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Topbar.scss'

class Topbar extends Component {

  render() {
    return (
      <div id="topbar">
        <div className="unidade-container">
          <a className="unidade" href="unidades">Unidade Farol</a>
        </div>
        <div className="d-flex">
          <a className="link" href="#">Portal do Aluno</a>
          <a className="link" href="#">Portal do Franqueado</a>
          <div className="nav-social">
            <a className="social-link" href="#">
              <div className="icone facebook">facebook</div>
            </a>
            <a className="social-link" href="#">
              <div className="icone instagram">instagram</div>
            </a>
            <a className="social-link" href="#">
              <div className="icone youtube">youtube</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
