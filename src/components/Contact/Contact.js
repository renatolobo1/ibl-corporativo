import React, { Component } from 'react';
import './Contact.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Directions from "../Directions2/DirectionsIndex";
import Modal from 'react-bootstrap/Modal';


import pin from './pin.png'
import phone from './phone.png'

const mapStyles = {
  width: '100%',
  height: '100%',
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: false,
      centerMap: { lat: "", lng: "" },

      // Mapa directions
      defaultZoom: 17,
      map: null,
      center: {
        lat: -9.652856,
        lng: -35.7170687
      },
      // currentLocation: {
      //   lat: "",
      //   lng: "",
      //   fromTitle: "LocalizacaoUsuario"
      // }
    };

    const cordenadas = { lat: Number(this.props.latitude), lng: Number(this.props.longitude) }
  }


  componentDidMount() {
    this.loadLocation();
  }


  loadLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);

        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            fromTitle: "LocalizacaoUsuario"
          },
          unitLocation: {
            lat: this.props.latitude,
            lng: this.props.longitude,
            fromTitle: "LocalizacaoUnidade"
          },

          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
        });

      });

    } catch (err) {
      console.log(err);
    }
  }

  hideModal = (e) => {
    this.setState({ ...this.state, activeModal: false })
  }
  handleShowModalDirection = () =>{
    this.setState({ ...this.state, activeModal: true })
  }

  renderMap= () => {
    return(
      <>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: Number(this.props.latitude), lng: Number(this.props.longitude) }}
          center={{ lat: Number(this.props.latitude), lng: Number(this.props.longitude) }}
        >
          <Marker
            name={'Localização da unidade'}
            position={{ lat: Number(this.props.latitude), lng: Number(this.props.longitude) }}
            icon={{
              url: pin,
              scaledSize:  new this.props.google.maps.Size(40, 58)
            }}
          />
        </Map>

      </>
    )
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
                  {this.renderMap()}

                  <Modal
                    size="xl"
                    onHide={this.hideModal}
                    show={this.state.activeModal}
                  >
                    <Modal.Body>
                      <Directions
                        currentLocation={this.state.currentLocation}
                        unitLocation={this.state.unitLocation}
                      />
                    </Modal.Body>
                  </Modal>
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

                  <div className="como-chegar" onClick={this.handleShowModalDirection}>
                    <p>Como chegar</p>
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
