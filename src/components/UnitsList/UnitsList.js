import React, { Component } from 'react';
import './UnitsList.scss';
import api from "../../services/api";
import { HashLink as Link } from 'react-router-hash-link';

class Unit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      units: [],
      states: [],
      selectedState: 'Alagoas'
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

  loadStates = async () => {
    try {
      const response = await api.get(`units/states`);
      const states = response.data;
      this.setState({ states });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadStates();
    this.loadUnits();
  }

  handleClick = (state) => {
    this.setState({ selectedState: state })
  }

  renderUnits = () => {
    const selectedUnits = this.state.units.filter(unit => {
      return unit.address.state === this.state.selectedState;
    }) ;

    return selectedUnits.map(unit => (
      <li className="unit">
        <Link className="unit-name" to={'unidades/'+unit.id}>
          <p>{unit.title}</p>
        </Link>
        <div className="unit-address-phone">
          <p>{unit.address.street}, {unit.address.number}, {unit.address.neighborhood}</p>
          <p>{unit.address.city} - {unit.address.state}</p>
          <p>Tel: {unit.phone}</p>
        </div>
        <div className="unit-site">
          <Link to={'unidades/'+unit.id}>
            Website
          </Link>
        </div>
      </li>
    ))
  }

  renderStates = () => {
    const { states } = this.state || [{ id: 1, title: "titulo" }];
    return states.map(state => (
      <li>
        <p onClick={() => this.handleClick(state)}>{state}</p>
      </li>
    ))
  }



  render() {
    return (
      <>
        <div id="units-list" className="container">
          <div className="row">

            <aside className="col-md-4">
              <div className="label">
                <p>Unidades IBL</p>
              </div>
              <div className="unidades">
                <p>Lista de</p>
                <p>nossas</p>
                <p>unidades</p>
              </div>
            </aside>
            <div className="state-list col-md-3">
              <ul>
                {this.renderStates()}
              </ul>
            </div>
            <div className="units-list col-md-5">
              <ul>
                {this.renderUnits()}
              </ul>

            </div>

          </div>
        </div>
      </>


    );
  }
}

export default Unit;
