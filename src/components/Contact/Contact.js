import React, { Component } from 'react';
import './Contact.scss';
import GoogleMapReact from 'google-map-react';
import pin from './pin.png'
import phone from './phone.png'

// https://github.com/google-map-react/google-map-react

const AnyReactComponent = ({ text }) =>
  <div>
    <img
    className="pin"
    width="30px"
    src={text}
    alt=""
    srcset=""/>
  </div>;

class Contact extends Component {
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
        <div id="contact">
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="contact-label">
                  <p>Contato</p>
                </div>
                <div className="fale">
                  <p>Fale</p>
                  <p>Conosco</p>
                </div>
              </aside>

              <div className=" col-md-8">

                <div className="row">

                  <div style={{ height: '50vh', width: '100%' }}>
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

                  <div className="contact-info">
                    <div className="contact-phone">
                      <p>Clique para entrar em contato</p>
                      <p> <img width="20px" src={phone}/>{this.props.phone}</p>
                    </div>
                    <div className="contact-email">
                      {this.props.unitEmail}
                    </div>
                  </div>


                </div>

              </div>

            </div>
          </div>


        </div>
        <div className="line-map"></div>

      </>


    );
  }
}

export default Contact;
