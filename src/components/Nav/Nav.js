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
      <Navbar className="menu" expand="lg">
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
              <Nav.Link>
                <Link to="#languages">Cursos</Link>
              </Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link>
                <Link to="#encontre">As unidades {this.props.unidade}</Link>
              </Nav.Link>
            </div>
            <div className={this.props.sobre === "false"? "d-none" : "menu-wrapper"}>
              <Nav.Link>
                <Link to="/cursos#unit">Sobre</Link>
              </Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link>
                <Link to="/blog">Notícias</Link>
              </Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link>
                <Link to="#contact">Contato</Link>
              </Nav.Link>
            </div>
            <div className="menu-wrapper">
              <Nav.Link
                href="http://www.iblfranquias.com.br/"
                target="_blank"
                rel="noopener"
              >Seja um Franqueado</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
