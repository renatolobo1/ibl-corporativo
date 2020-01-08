import React, { Component } from 'react';
import './Languages.scss';

import curso from './curso.jpg'
import flag from './flag.png'

class Languages extends Component {

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

                  {/* Curso */}
                  <a className="curso col-md-4" href="curso">
                  <div className="curso-info">
                    <div className="text">
                      <p className="title">Inglês</p>
                      <p className="mais">Saiba +</p>
                    </div>
                    <img src={flag} alt="flag"/>
                  </div>

                  <img className="img-person" src={curso} alt="" srcset=""/>
                </a>
                {/* Curso */}
                  {/* Curso */}
                  <a className="curso col-md-4" href="curso">
                    <div className="curso-info">
                      <div className="text">
                        <p className="title">Inglês</p>
                        <p className="mais">Saiba +</p>
                      </div>
                      <img src={flag} alt="flag"/>
                    </div>

                    <img className="img-person" src={curso} alt="" srcset=""/>
                  </a>
                  {/* Curso */}
                    {/* Curso */}
                    <a className="curso col-md-4" href="curso">
                    <div className="curso-info">
                      <div className="text">
                        <p className="title">Inglês</p>
                        <p className="mais">Saiba +</p>
                      </div>
                      <img src={flag} alt="flag"/>
                    </div>

                    <img className="img-person" src={curso} alt="" srcset=""/>
                  </a>
                  {/* Curso */}
                  {/* Curso */}
                  <a className="curso col-md-4" href="curso">
                    <div className="curso-info">
                      <div className="text">
                        <p className="title">Inglês</p>
                        <p className="mais">Saiba +</p>
                      </div>
                      <img src={flag} alt="flag"/>
                    </div>

                    <img className="img-person" src={curso} alt="" srcset=""/>
                  </a>
                  {/* Curso */}
                    {/* Curso */}
                    <a className="curso col-md-4" href="curso">
                    <div className="curso-info">
                      <div className="text">
                        <p className="title">Inglês</p>
                        <p className="mais">Saiba +</p>
                      </div>
                      <img src={flag} alt="flag"/>
                    </div>

                    <img className="img-person" src={curso} alt="" srcset=""/>
                  </a>
                  {/* Curso */}
                  {/* Curso */}
                  <a className="curso col-md-4" href="curso">
                    <div className="curso-info">
                      <div className="text">
                        <p className="title">Inglês</p>
                        <p className="mais">Saiba +</p>
                      </div>
                      <img src={flag} alt="flag"/>
                    </div>

                    <img className="img-person" src={curso} alt="" srcset=""/>
                  </a>
                  {/* Curso */}

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
