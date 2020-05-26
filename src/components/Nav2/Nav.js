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
      <Navbar id="main-nav" className="menu" expand="lg">
        <Navbar.Brand
          className="menu-logo-container"
        >
        <Link
          to={this.props.unit ? `/${this.props.unit}` : "/"}
        >
          <img
            src={logo}
            className="d-inline-block align-top menu-logo"
            alt="React Bootstrap logo"
          />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className="menu-wrapper">
              <Nav.Link
                href="http://www.iblfranquias.com.br/"
                target="_self"
              >Seja um Franqueado</Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link
                href="http://ibl-idiomas.com/"
                target="_blank"
                rel="noopener"
              >Acesso ao site do IBL</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
