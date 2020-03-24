import React, { Component } from 'react';
import './findUnit.scss';
import pin from './pin.png';
import close from './close.png';
import { HashLink as Link } from 'react-router-hash-link';
import api from "../../services/api";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '96%',
  height: '96%',
};

class findUnit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: "unidade",
      states: [],
      cities: [],
      units: [],
      selectedState: "Alagoas",
      activeUnitsList: "false",
      latitude: "-9.665495",
      longitude: "-35.712405",
      centerMap: { lat: "-9.665495", lng: "-35.712405" },
      preCenter: {}

    };
  }

  loadStates = async () => {
    try {
      const response = await api.get(`units/states`);
      const states = response.data;
      this.setState({ states });
    } catch (err) {
      console.log(err);
    }
  }

  loadCities = async () => {
    try {
      const response = await api.get(`units/cities`);
      const cities = response.data;
      this.setState({ cities });
    } catch (err) {
      console.log(err);
    }
  }

  loadUnits = async () => {
    try {
      const response = await api.get(`units/index`);
      const units = response.data;
      this.setState({ units });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadStates();
    this.loadCities();
    this.loadUnits();
  }

  renderStates = () => {
    const { states } = this.state || [{ id: 1, title: "titulo" }];
    return states.map((state, index) => (

      <option
        value={state}
        key={index}
      >
        {state}
      </option>
    ))
  }

  renderCities = () => {
    const { cities } = this.state || [{ id: 1, title: "titulo" }];
    return cities.map((city, index) => (

      <option
        value={city}
        key={index}
      >
        {city}
      </option>
    ))
  }

  renderUnits = () => {
    const selectedUnits = this.state.units.filter(unit => {
      return unit.address.state === this.state.selectedState;
    });

    return selectedUnits.map((unit, index) => (
      <option
        key={index}
        value={`${unit.address.latitude},${unit.address.longitude}`}
      >
        {unit.title}
      </option>
    ))
  }

  handleStateChange = (event) => {
    this.setState({ selectedState: event.target.value })
    console.log(this.state.selectedState)
  }

  handleUnitChange = (event) => {
    var latlong = event.target.value.split(",")
    var vlat = latlong[0];
    var vlong = latlong[1];

    this.setState({ preCenter: { lat: vlat, lng: vlong } })
    this.setState({ latitude:  vlat })
    this.setState({ longitude:  vlong })
  }

  changeMap = (event) => {
    this.setState({ centerMap: this.state.preCenter })
  }

  handleClick = (state) => {
    this.setState({ selectedState: state })
  }

  showListUnits = () => {
    this.setState({ activeUnitsList: "true" })
  }
  hideListUnits = () => {
    this.setState({ activeUnitsList: "false" })
  }

  renderUnits2 = () => {
    const selectedUnits = this.state.units.filter(unit => {
      return unit.address.state === this.state.selectedState;
    }) ;

    return selectedUnits.map((unit, index) => (
      <li className="unit" key={index}>
        <Link className="unit-name" to={unit.slug}>
          <p>{unit.title}</p>
        </Link>
        <div className="unit-address-phone">
          <p>{unit.address.street}, {unit.address.number}, {unit.address.neighborhood}</p>
          <p>{unit.address.city} - {unit.address.state}</p>
          <p>Tel: {unit.phone}</p>
        </div>
        <div className="unit-site">
          <Link to={unit.slug}>
            Website
          </Link>
        </div>
      </li>
    ))
  }

  renderStates2 = () => {
    const { states } = this.state || [{ id: 1, title: "titulo" }];
    return states.map((state, index) => (
      <li key={index}>
        <p onClick={() => this.handleClick(state)}>{state}</p>
      </li>
    ))
  }

  render() {
    const { selectedState } = this.state;

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
                <div className="lista">
                  <div onClick={() => this.showListUnits()}>
                    <div className="yellow">Veja a lista de escolas</div>
                  </div>
                </div>

              </aside>
              <div className="map-container col-md-8">

                <div className="find-form">

                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 ">
                        <select
                          className="select-inscricao"
                          name="state"
                          onChange={this.handleStateChange}
                          value={selectedState}
                        >
                          {this.renderStates()}
                        </select>
                      </div>
                      <div className="col-md-4 ">
                        <select
                          className="select-inscricao"
                          name="units"
                          onChange={this.handleUnitChange}
                        >
                          {this.renderUnits()}
                        </select>
                      </div>
                      <div className="col-md-4 ">
                        <div className="find-form-button" onClick={() => this.changeMap()}>Buscar no mapa</div>
                      </div>

                    </div>

                  </div>
                </div>

                <div id="result-container">
                  <div className={this.state.activeUnitsList === "false" ? "d-none" : "container"} id="lista-unidades">

                    <div className="close-button" onClick={() => this.hideListUnits()}>
                      <img src={close} alt=""/>
                    </div>

                    <div className="row">

                      <div className="state-list col-md-6">
                        <ul>
                          {this.renderStates2()}
                        </ul>
                      </div>

                      <div className="units-list col-md-6">
                        <ul>
                          {this.renderUnits2()}
                        </ul>
                      </div>

                    </div>

                  </div>
                  <div className={this.state.activeUnitsList === "true" ? "d-none" : ""}>

                    <Map
                      google={this.props.google}
                      zoom={15}
                      style={mapStyles}
                      initialCenter={this.state.centerMap}
                      center={this.state.centerMap}
                    >
                      <Marker
                        name={'Localização da unidade'}
                        position={{ lat: this.state.latitude, lng: this.state.longitude }}
                        icon={{
                          url: pin,
                          scaledSize:  new this.props.google.maps.Size(40, 58)
                        }}
                      />
                    </Map>
                  </div>
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyByiVhg7D1CD-0ZiAB43aYuqU8OvWtSksU'
})(findUnit);

