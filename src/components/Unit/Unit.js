import React, { Component } from 'react';
import './Unit.scss';
import Carousel from 'react-bootstrap/Carousel';
import farol from './farol.png';
import { HashLink as Link } from 'react-router-hash-link';


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
                  <p>{this.props.unit}</p>
                </div>
                <div className="botao">
                  <Link to="#banner">
                    <p>Quero visitar</p>
                    <p>a unidade</p>
                  </Link>
                </div>
              </aside>
              <div className="cursos col-md-8">

                <div className="carousel-container">
                  <div className="speech-bubble">
                    <p>Rua Alcebíades Valente, 260 - {this.props.unit}</p>
                    <p>Maceió - AL - CEP 57051-050</p>
                    <p>(82) 3336-2530</p>
                    <p>bit.ly/{this.props.unit}</p>
                    <p>adm.{this.props.unit}@ibl-idiomas.com.br</p>
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
