import React, { Component } from 'react';
import './SlideShow.scss';
import Carousel from 'react-bootstrap/Carousel';
import imagem from './galeria1.jpg';
import DiscountForm from '../DiscountForm/DiscountForm';


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
        <DiscountForm />
      </div>
    );
  }
}

export default SlideShow;
