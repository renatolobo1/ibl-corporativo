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
          <aside className="col-3">
            <div className="unidades">
              <p>Unidades IBL</p>
            </div>
            <div className="conheca">
              <p>Conheça a</p>
              <p>unidade</p>
              <p>Farol</p>
            </div>
            <div className="botao">
              <p>Quero visitar</p>
              <p>a unidade</p>
            </div>
          </aside>
          <div className="cursos col-9">

            <div className="row">

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
        <div className="line"></div>
      </>


    );
  }
}

export default Unit;