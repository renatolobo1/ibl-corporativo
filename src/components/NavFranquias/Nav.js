import React, { Component } from 'react';
import './Nav.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { HashLink as Link } from 'react-router-hash-link';

// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
import logo from "../../assets/images/logo_ibl.png"

class Navigation extends Component {

  render() {
    return (
      <div id="main-nav">
        <div className="nav-content">
          <div className="logo-container">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="nav-menu-container">
            <div className="menu-item">
              <a>Seja um franqueado</a>
            </div>
            <div className="menu-item">
              <a>Acesso o site do IBL</a>
            </div>
          </div>
          <div className="menu-toggler">
            <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="nav-mobile-content d-none">
          <div className="menu-item">
            <a>Seja um franqueado</a>
          </div>
          <div className="menu-item">
            <a>Acesso o site do IBL</a>
          </div>
        </div>

      </div>
    );
  }
}

export default Navigation;
