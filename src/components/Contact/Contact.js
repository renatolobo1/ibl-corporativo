import React, { Component } from 'react';
import './Contact.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import pin from './pin.png'
import phone from './phone.png'

const mapStyles = {
  width: '100%',
  height: '100%',
};

class Contact extends Component {

  componentDidMount(){
    if(!this.props.latitude){
      window.location.reload();
    }
  }

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
                    <Map
                      google={this.props.google}
                      zoom={15}
                      style={mapStyles}
                      initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
                    >
                      <Marker
                        name={'Localização da unidade'}
                        position={{ lat: this.props.latitude, lng: this.props.longitude }}
                        icon={{
                          url: pin,
                          scaledSize:  new this.props.google.maps.Size(40, 58)
                        }} />
                    </Map>
                  </div>

                  <div className="contact-info">
                    <div className="contact-phone">
                      <p>Clique para entrar em contato</p>
                      <p> <img width="20px" alt="phone" src={phone}/>{this.props.phone}</p>
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyByiVhg7D1CD-0ZiAB43aYuqU8OvWtSksU'
})(Contact);
