import React, { Component } from 'react';
import './Nav.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/images/logo_ibl.png"

class Navigation extends Component {

  render() {
    return (
      <Navbar className="menu"  expand="lg">
        <Navbar.Brand className="menu-logo-container" href="#home">
          <img
            src={logo}
            className="d-inline-block align-top menu-logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="menu-wrapper">
              <Nav.Link href="#languages">Cursos</Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link href="#unit">A unidade</Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link href="#home">Notícias</Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link href="#contact">Contato</Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link href="#home">Seja um Franqueado</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
