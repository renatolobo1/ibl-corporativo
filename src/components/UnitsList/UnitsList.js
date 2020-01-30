import React, { Component } from 'react';
import './UnitsList.scss';
import api from "../../services/api";
import { HashLink as Link } from 'react-router-hash-link';

class Unit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      units: []
    }

  }

  loadUnits = async () => {
    try {
      const response = await api.get(`units/index`);
      const units = response.data;
      this.setState({ units });
      console.log(this.state.units)
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadUnits();
  }

  renderUnits = () => {
    const { units } = this.state || [{ id: 1, title: "titulo" }];
    return units.map(unit => (
      <li className="unit">
        <Link className="unit-name" to="unidades/gruta">
          <p>{unit.title}</p>
        </Link>
        <div className="unit-address-phone">
          <p>{unit.address.street}, {unit.address.number}, {unit.address.neighborhood}</p>
          <p>{unit.address.city} - {unit.address.state}</p>
          <p>Tel: (82) 3336-8899</p>
        </div>
        <div className="unit-site">
          <Link to="unidades/gruta">
            Website
          </Link>
        </div>
      </li>
    ))
  }

  render() {
    return (
      <>
        <div id="units-list" className="container">
          <div className="row">

            <aside className="col-md-3">
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
                <li>
                  <a href="">Alagoas</a>
                </li>
                <li>
                  <a href="">Amapá</a>
                </li>
                <li>
                  <a href="">Ceará</a>
                </li>
                <li>
                  <a href="">Mato Grosso do Sul</a>
                </li>
                <li>
                  <a href="">Paraná</a>
                </li>
              </ul>

            </div>
            <div className="units-list col-md-6">
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
