import React, { Component } from 'react';
import './About.scss';
import api from "../../services/api";
import { HashLink as Link } from 'react-router-hash-link';
import Modal from 'react-bootstrap/Modal';


class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeModal: null,
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

  clickHandler(e, index) {
    this.setState({ ...this.state, activeModal: index })
  }

  hideModal(e) {
    this.setState({ ...this.state, activeModal: null })
  }

  renderCourse() {
    const coursesList = this.state.courses

    return coursesList.map((course, index) => (
      <div key={index} className="curso col-md-4" onClick={e => this.clickHandler(e, index)}>
        <div className="curso-info">
          <div className="text">
            <p className="title">{course.title}</p>
            <p className="mais">Saiba +</p>
          </div>
        </div>

        <img className="img-person" src={course.cover.url} alt="" srcSet="" />
        <div onClick={e => e.stopPropagation()}>

        </div>


      </div>
    ))
  }

  render() {
    return (
      <div id="about" >
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <div className="sobre">
                <p>Sobre</p>
              </div>
              <div className="historia">
                <p>Nossa</p>
                <p>História</p>
              </div>
            </aside>
            <div className="cursos col-md-6">

              <div className="container">
                <div className="row">
                  {this.renderCourse()}
                </div>
              </div>
            </div>

            <div className="col-md-6">

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;
