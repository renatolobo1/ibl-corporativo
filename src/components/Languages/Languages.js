import React, { Component } from 'react';
import './Languages.scss';
import curso1 from './curso1.jpg'
import curso2 from './curso2.jpg'
import curso3 from './curso3.jpg'

class Languages extends Component {

  render() {
    return (
      <div id="languages">
        <aside className="col-3">
          <div className="conheca">
            <p>Conheça</p>
            <p>nossos idiomas</p>
          </div>
          <div className="bilingue">
            <p>Seja</p>
            <p>Bilingue</p>
          </div>
          <div className="botao">
            <p>Quero aprender</p>
            <p>um novo idioma</p>
          </div>
        </aside>
        <div className="cursos col-9">

          <div className="row">

            <div className="curso col-4">
              <p>Curso</p>
              <img src={curso1} alt="" srcset=""/>
            </div>

            <div className="curso col-4">
              <p>Curso</p>
              <img src={curso2} alt="" srcset=""/>
            </div>

            <div className="curso col-4">
              <p>Curso</p>
              <img src={curso3} alt="" srcset=""/>
            </div>

            <div className="curso col-4">
              <p>Curso</p>
              <img src={curso1} alt="" srcset=""/>
            </div>

            <div className="curso col-4">
              <p>Curso</p>
              <img src={curso2} alt="" srcset=""/>
            </div>

            <div className="curso col-4">
              <p>Curso</p>
              <img src={curso3} alt="" srcset=""/>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Languages;
