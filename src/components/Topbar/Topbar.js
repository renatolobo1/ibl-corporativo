import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import { HashLink as Link } from 'react-router-hash-link';

import './Topbar.scss'

class Topbar extends Component {

  render() {
    return (
      <div id="topbar">
        <div className="unidade-container">
          <Link className="unidade" to="/unidades" >
            {this.props.unit ? "Unidade ": ""}
            {this.props.unit}
            </Link>
        </div>
        <div className="d-flex">
          <a
            className="link"
            href="http://www.iblsemlegenda.com.br/"
            target="_blank"
            rel="noopener noreferrer">
            Portal do Aluno
            </a>
          <a
            className="link"
            href="https://scaf.ibl-idiomas.com.br/"
            target="_blank"
            rel="noopener noreferrer">
            Portal do Franqueado
            </a>
          <div className="nav-social">
            <a
              className="social-link"
              href="https://www.facebook.com/iblbrasil/"
              target="_blank"
              rel="noopener noreferrer">
              <div className="icone facebook">facebook</div>
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/ibl.mczfarol/"
              target="_blank"
              rel="noopener noreferrer">
              <div className="icone instagram">instagram</div>
            </a>
            <a
              className="social-link"
              href="https://www.youtube.com/channel/UCGU3q5arObNXK8RjstPqmmw"
              target="_blank"
              rel="noopener noreferrer">
              <div className="icone youtube">youtube</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
