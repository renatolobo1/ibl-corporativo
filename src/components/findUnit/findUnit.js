import React, { Component } from 'react';
import './findUnit.scss';
import GoogleMapReact from 'google-map-react';
import pin from './pin.png';
import close from './close.png';
import { HashLink as Link } from 'react-router-hash-link';
import api from "../../services/api";


class findUnit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: "unidade",
      states: [],
      cities: [],
      units: [],
      selectedState: "Alagoas",
      activeUnitsList: "false"
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
        value="volvo"
      >
        {unit.title}
      </option>
    ))
  }

  handleStateChange = (event) => {
    this.setState({ selectedState: event.target.value })
    console.log(this.state.selectedState)
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
                  <p onClick={() => this.showListUnits()}>
                    <Link>Veja a lista de escolas</Link>
                  </p>
                </div>

              </aside>
              <div className="map-container col-md-8">

                {/* <div className="find-form">

                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 ">
                        <select
                          className="select-inscricao"
                          name="cars"
                          onChange={this.handleStateChange}
                          value={selectedState}
                        >
                          {this.renderStates()}
                        </select>
                      </div>
                      <div className="col-md-4 ">
                        <select className="select-inscricao" name="cars">
                          {this.renderUnits()}
                        </select>
                      </div>
                      <div className="col-md-4 ">
                        <div className="find-form-button">Buscar no mapa</div>
                      </div>

                    </div>

                  </div>
                </div> */}

                <div style={{ height: '60vh', width: '100%', backgroundColor: 'white', padding: '32px'}}>
                  <div className={this.state.activeUnitsList === "false" ? "d-none" : "container"} id="lista-unidades">

                    <div className="close-button" onClick={() => this.hideListUnits()}>
                      <img src={close} alt="" srcset=""/>
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
