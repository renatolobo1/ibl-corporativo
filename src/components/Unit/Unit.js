import React, { Component } from 'react';
import './Unit.scss';
import Carousel from 'react-bootstrap/Carousel';
import { HashLink as Link } from 'react-router-hash-link';

class Unit extends Component {

  renderImages= () => {
    const gallery = this.props.gallery;
    return gallery.map(image => (
      <Carousel.Item key={image.url}>
        <img
          className="d-block w-100"
          src={image.url}
          alt={image.url}
        />
      </Carousel.Item>
    ))
  }

  render() {
    // console.log(this.props.gallery)
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
                  {/* <p>unidade</p> */}
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
                    <p>{this.props.street}, {this.props.number}, {this.props.neighborhood}</p>
                    <p>{this.props.city} - {this.props.state}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.site}</p>
                    <p>{this.props.email}</p>
                  </div>

                  <Carousel>
                   {this.renderImages()}
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
