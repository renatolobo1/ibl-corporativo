import React, { Component } from 'react';
import './Navegacao.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/images/logo_ibl.png"

class Navegacao extends Component {
    
  render() {
    return (
      <Navbar className="menu"  expand="lg">
        <Navbar.Brand className="menu-logo-container" href="#home">
          <img
            src={logo}
            // width="30"
            height="95"
            className="d-inline-block align-top menu-logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            
            <div className="menu-wrapper">
              
              <Nav.Link href="#home">Cursos</Nav.Link>
              </div>
            
            <div className="menu-wrapper">
              
              <Nav.Link href="#home">Unidades</Nav.Link>
              </div>
            
            <div className="menu-wrapper">
              
              <Nav.Link href="#home">Sobre</Nav.Link>
              </div>
            
            <div className="menu-wrapper">
              
              <Nav.Link href="#home">Notícias</Nav.Link>
              </div>
            
            <div className="menu-wrapper">
              
              <Nav.Link href="#home">Contato</Nav.Link>
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

export default Navegacao;