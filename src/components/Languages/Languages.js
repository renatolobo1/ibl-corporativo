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
        <div onClick={e => e.stopPropagation()}>

          <Modal
            id={course.key}
            size="xl"
            show={this.state.activeModal === index}
            onHide={this.hideModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >

            <Modal.Body >
              <div className="closeButton close" onClick={this.hideModal}><span aria-hidden="true">&times;</span></div>
              {/* <Curso language={course.title} /> */}

              <>
                <div id="curso">
                  <div className="container">
                    <div className="row">

                      <aside className="col-md-3">
                        <div className="curso-label">
                          <p>Conheça</p>
                          <p>Nossos Idiomas</p>
                        </div>
                        <div className="seja">
                          <p>Seja</p>
                          <p>Bilíngue</p>
                        </div>
                      </aside>

                      <div className="course-details col-md-9">

                        <p className="course-title">{this.props.language}</p>
                        <p className="course-description">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Maiores asperiores dolore sit consequuntur quidem sint
                          praesentium sunt. Error, odit, ipsa dolorem facilis fugit
                          doloribus repudiandae voluptatibus tenetur repellendus libero
                          aliquam?
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Maiores asperiores dolore sit consequuntur quidem sint
                          praesentium sunt. Error, odit, ipsa dolorem facilis fugit
                          doloribus repudiandae voluptatibus tenetur repellendus libero
                          aliquam?
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Maiores asperiores dolore sit consequuntur quidem sint
                          praesentium sunt. Error, odit, ipsa dolorem facilis fugit
                          doloribus repudiandae voluptatibus tenetur repellendus libero
                          aliquam?
                        </p>

                        <div className="container" style={{ padding: 0 }}>
                          <div className="row">

                            <div className="col-md-6">
                              <div id="duracao" className="botao-curso">
                                <p className="label">Duração do curso</p>
                                <p className="info">2 anos úteis</p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div id="inscricao" className="botao-curso">
                                <Link to="#topbar" onClick={this.hideModal}>
                                  <p className="label">Faça sua inscriçao e</p>
                                  <p className="info">Estude Alemão</p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </>

            </Modal.Body>
          </Modal>
        </div>


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
                <Link to="#topbar">
                  <p>Quero aprender</p>
                  <p>um novo idioma</p>
                </Link>
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
