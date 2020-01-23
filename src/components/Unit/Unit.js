import React, { Component } from 'react';
import './Unit.scss';
import Carousel from 'react-bootstrap/Carousel';
import farol from './farol.png'

class Unit extends Component {

  render() {
    return (
      <>
        <div id="unit">
          <div className="fundo"></div>
          <div className="container">
            <div className="row">

              <aside className="col-md-4">
                <div className="unidades">
                  <p>Unidades IBL</p>
                </div>
                <div className="conheca">
                  <p>Conheça a</p>
                  <p>unidade</p>
                  <p>Farol</p>
                </div>
                <div className="botao">
                  <a href="#course-carousel">
                    <p>Quero visitar</p>
                    <p>a unidade</p>
                  </a>
                </div>
              </aside>
              <div className="cursos col-md-8">

                <div className="carousel-container">
                  <div className="speech-bubble">
                    <p>Rua Alcebíades Valente, 260 - Farol</p>
                    <p>Maceió - AL - CEP 57051-050</p>
                    <p>(82) 3336-2530</p>
                    <p>bit.ly/unidadeiblfarol</p>
                    <p>adm.farol@ibl-idiomas.com.br</p>
                  </div>

                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={farol}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={farol}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={farol}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  </Carousel>

                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="unit-line"></div>
      </>


    );
  }
}

export default Unit;
