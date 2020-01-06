import React, { Component } from 'react';
import './Curso.scss';
import paris from './paris.jpg'
import icon from './airplane-icon.png'
import search from './search.png'

class Unit extends Component {

  render() {
    return (
      <>
        <div id="curso">
          <aside className="col-3">
            <div className="curso-label">
              <p>Conheça</p>
              <p>Nossos Idiomas</p>
            </div>
            <div className="seja">
              <p>Seja</p>
              <p>Bilíngue</p>
            </div>
          </aside>

          <div className="course-details col-9">

            <p className="course-title">Alemão</p>
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

          </div>

        </div>
      </>


    );
  }
}

export default Unit;
