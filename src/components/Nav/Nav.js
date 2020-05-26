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
          <Nav className="mr-auto">
            <div className="menu-wrapper">
              {/* <Nav.Link> */}
                <Link
                  className="nav-link"
                  to={this.props.cursosUnidade ? `/${this.props.cursosUnidade}#languages` : "/#languages"}
                >
                  Cursos
                </Link>
              {/* </Nav.Link> */}
            </div>
            <div className="menu-wrapper">
              {/* <Nav.Link> */}
                <Link
                  className="nav-link"
                  to={this.props.unit ? `/${this.props.unit}#unit` : "/#encontre"}>
                    {this.props.unit ? "A Unidade" : "Unidades"}
                </Link>
              {/* </Nav.Link> */}
            </div>
            <div className={this.props.unit ? "d-none" : "menu-wrapper"}>
              {/* <Nav.Link> */}
                <Link
                  className="nav-link"
                  to="/sobre">Sobre</Link>
              {/* </Nav.Link> */}
            </div>
            <div className="menu-wrapper">
              {/* <Nav.Link> */}
                <Link
                  className="nav-link"
                  to={this.props.blogUnidade ? `/${this.props.blogUnidade}/blog` :"/blog"}
                >
                  Blog
                </Link>
              {/* </Nav.Link> */}
            </div>
            <div className="menu-wrapper">
              {/* <Nav.Link> */}
                <Link
                  className="nav-link"
                  to={this.props.unit ? `/${this.props.unit}#contact` : "/#contact"}
                >Contato</Link>
              {/* </Nav.Link> */}
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
