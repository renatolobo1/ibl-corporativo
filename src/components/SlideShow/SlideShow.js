import React, { Component } from 'react';
import './SlideShow.scss';
import Carousel from 'react-bootstrap/Carousel';
import imagem from './galeria1.jpg';


class SlideShow extends Component {

  render() {
    return (
      <div id="course-carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <div className="inscricao">
          <p>Inscrição Online</p>
          <input type="text" placeholder="nome"/>
          <input type="email" placeholder="email"/>
          <input type="phone" placeholder="Telefone"/>
          <div className="select-container">
            <select className="select-inscricao" name="cars">
              <option value="volvo">Curso</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <select className="select-inscricao" name="cars">
              <option value="volvo">Faixa Etária</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="button-inscricao">
            <p>Enviar</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShow;
