import React, { Component } from 'react';
import './Languages.scss';
import { HashLink as Link } from 'react-router-hash-link';
import Curso from '../../components/Curso/Curso';
import Modal from 'react-bootstrap/Modal';

import curso from './curso.jpg'
import flag from './flag.png'

class Languages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeModal: null,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  clickHandler(e, index) {
    this.setState({ ...this.state, activeModal: index })
  }

  hideModal(e) {
    this.setState({ ...this.state, activeModal: null })
    console.log(this.state)
  }

  renderCourse() {
    const coursesList = [
      { "title": "Inglês" }, { "title": "Francês" },
      { "title": "Japonês" }, { "title": "Italiano" },
      { "title": "Esperanto" }, { "title": "Libras" },
    ]

    return coursesList.map((course, index) => (
      <div className="curso col-md-4" onClick={e => this.clickHandler(e, index)}>
        <div className="curso-info">
          <div className="text">
            <p className="title">{course.title}</p>
            <p className="mais">Saiba +</p>
          </div>
          <img src={flag} alt="flag" />
        </div>

        <img className="img-person" src={curso} alt="" srcset="" />
        <Modal
          id={course.key}
          size="xl"
          show={this.state.activeModal === index}
          onHide={this.hideModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body >
            <Curso language={course.title} />
          </Modal.Body>
        </Modal>
      </div>
    ))
  }

  render() {
    return (
      <div id="languages" >
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <div className="conheca">
                <p>Conheça</p>
                <p>nossos idiomas</p>
              </div>
              <div className="bilingue">
                <p>Seja</p>
                <p>Bilingue</p>
              </div>
              <div className="botao">
                <a href="#course-carousel">
                  <p>Quero aprender</p>
                  <p>um novo idioma</p>
                </a>
              </div>
            </aside>
            <div className="cursos col-md-9">

              <div className="container">
                <div className="row">
                  {this.renderCourse()}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
