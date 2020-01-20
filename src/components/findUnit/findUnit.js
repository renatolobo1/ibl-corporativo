import React, { Component } from 'react';
import './findUnit.scss';
import GoogleMapReact from 'google-map-react';
import pin from './pin.png'

import Carousel from 'react-bootstrap/Carousel';
import farol from './farol.png'

const AnyReactComponent = ({ text }) =>
  <div>
    <img
      className="pin"
      width="30px"
      src={text}
      alt=""
      srcset="" />
  </div>;

class findUnit extends Component {
  static defaultProps = {
    center: {
      lat: -9.6531734,
      lng: -35.7169135
    },
    zoom: 16
  };


  render() {
    return (
      <>
        <div id="encontre">
          <div className="fundo"></div>
          <div className="container">
            <div className="row">

              <aside className="col-md-4">
                <div className="unidades">
                  <p>Unidades IBL</p>
                </div>
                <div className="conheca">
                  <p>Encontre a</p>
                  <p>unidade mais</p>
                  <p>próxima</p>
                </div>

              </aside>
              <div className="map-container col-md-8">

                <div className="find-form">

                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <select className="select-inscricao" name="cars">
                          <option value="volvo">Faixa Etária</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <select className="select-inscricao" name="cars">
                          <option value="volvo">Faixa Etária</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <select className="select-inscricao" name="cars">
                          <option value="volvo">Faixa Etária</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <select className="select-inscricao" name="cars">
                          <option value="volvo">Faixa Etária</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>



                    </div>

                  </div>
                </div>

                <div style={{ height: '60vh', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyByiVhg7D1CD-0ZiAB43aYuqU8OvWtSksU' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                  >
                    <AnyReactComponent
                      lat={-9.6531734}
                      lng={-35.7169135}
                      text={pin}
                    />
                  </GoogleMapReact>
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

export default findUnit;
