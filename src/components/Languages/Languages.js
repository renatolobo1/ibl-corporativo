import React, { Component } from 'react';
import './Languages.scss';
import api from "../../services/api";
import DiscountForm from '../DiscountForm/DiscountForm';

import { HashLink as Link } from 'react-router-hash-link';
import Modal from 'react-bootstrap/Modal';

import flag from './flag.png'

import adults from './adults.png'
import teens from './teens.png'
import kids from './kids.png'

class Languages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeModal: null,
      activePlus: false,
      courses: [],
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.loadCourses();
  }

  loadCourses = async () => {
    try {
      const response = await api.get(`courses/index`);
      const courses = response.data;
      this.setState({ courses });
      console.log(courses)
      // console.log(this.state.courses)
    } catch (err) {
      console.log(err);
    }
  }

  renderStates = () => {
    const { states } = this.state || [{ id: 1, title: "titulo" }];
    return states.map(state => (
      <li>
        <p onClick={() => this.handleClick(state)}>{state}</p>
      </li>
    ))
  }

  renderChildrenCourses = (related_courses) => {
    return related_courses.map(course => (
      <div
        key={course.id}
        className="col-md-4 col-4 image-container"
        onClick={() => this.handleClickOnRelated(course)}
      >
        <img width="100px" src={course.course_flag.url} alt={course.title}/>
      </div>
    ))
  }

  handleClickOnRelated(course) {
    this.setState({ ...this.state, courses: [course] })
  }

  clickHandler(e, index) {
    this.setState({ ...this.state, activeModal: index })
  }

  hideModal(e) {
    this.setState({ ...this.state, activeModal: null })
  }

  setIsShown = (index) => {
    this.setState({ ...this.state, activePlus: index })
  }

  setIsNotShown = () => {
    this.setState({ ...this.state, activePlus: null })
  }

  renderInfo(course){
    if(course.title === "Inglês Teens" || course.title === "Inglês Kids" || course.title === "Inglês Adults"){
      return
    }
    else{
      return (
        <div className="col-md-6">
        <div id="duracao" className="botao-curso">
          <p className="label">Duração do curso</p>
          <p className="info">2 anos úteis</p>
        </div>
      </div>
      )
    }
  }

  renderCourse() {
    const coursesList = this.state.courses

    return coursesList.map((course, index) => (
      <div key={index}
          className="curso col-md-4"
          onClick={e => this.clickHandler(e, index)}>
        <div
          className={this.state.activePlus === index ? "curso-filter hide" : "curso-filter "}
          onMouseEnter={() => this.setIsShown(index)}
          onMouseLeave={() => this.setIsNotShown()}
        ></div>
        <div className="curso-info"
        onMouseEnter={() => this.setIsShown(index)}
        onMouseLeave={() => this.setIsShown()}>
          <div className="text">
            <p className="title">{course.title}</p>
            <p className={this.state.activePlus === index ? "mais show" : "mais"}>Saiba +</p>
          </div>
          <img src={course.site_flag.url || flag} alt="flag" />
        </div>

        <img className="img-person" src={course.cover.url} alt="" srcSet="" />
        <div onClick={e => e.stopPropagation()}>

          <Modal
            id={course.key}
            size="xl"
            show={this.state.activeModal === index}
            onHide={this.hideModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onExit={this.loadCourses}
          >

            <Modal.Body >
              <div
                className="closeButton close"
                onClick={this.hideModal}
              >
                <span aria-hidden="true">&times;</span>
              </div>
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

                      <div
                        style={{backgroundImage: `url(${course.inner.url})`}}
                        className="course-details col-md-9"
                      >

                        <p className="course-title">{course.title}</p>
                        {/* <p className="course-description">
                          {course.description}
                        </p> */}

                        <p className="course-description"
                            dangerouslySetInnerHTML={{ __html: course.description }} />

                        <div className="english-courses row">
                          { course.children_courses ? this.renderChildrenCourses(course.children_courses) : ""}
                        </div>

                        <div className="container" style={{ padding: 0 }}>
                          <div className="row">

                           { this.renderInfo(course) }

                            <div className="col-md-6">
                              <div id="inscricao" className="botao-curso">
                                <Link to={this.props.unit ? "#topbar" : "#agende"} onClick={this.hideModal}>
                                  <p className="label">Faça sua inscrição e</p>
                                  <p className="info">estude {course.title}</p>
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
                <p>Bilíngue</p>
              </div>
              <div className="botao">
                <Link to={this.props.unit ? "#topbar" : "#agende"} >
                  <p>Quero aprender</p>
                  <p>um novo idioma</p>
                </Link>

              </div>
              <DiscountForm />
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
