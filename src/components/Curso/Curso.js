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

                <div className="container"  style={{padding: 0}}>
                  <div className="row">

                    <div className="col-md-6">
                      <div id="duracao" className="botao-curso">
                        <p className="label">Duração do curso</p>
                        <p className="info">2 anos úteis</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div id="inscricao" className="botao-curso">
                        <p className="label">Faça sua inscriçao e</p>
                        <p className="info">Estude Alemão</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </>


    );
  }
}

export default Unit;
