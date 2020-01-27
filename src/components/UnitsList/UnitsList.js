import React, { Component } from 'react';
import './UnitsList.scss';
import paris from './paris.jpg'
import icon from './airplane-icon.png'
import search from './search.png'

import { HashLink as Link } from 'react-router-hash-link';

class Unit extends Component {

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
                <li className="unit">
                  <Link className="unit-name" to="unidades/gruta">
                    <p>Unidade Gruta</p>
                  </Link>
                  <div className="unit-address-phone">
                    <p>Rua Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p>Eos perferendis odio deleniti </p>
                    <p>Tel: (82) 3336-8899</p>
                  </div>
                  <div className="unit-site">
                    <Link to="unidades/gruta">
                      Website
                    </Link>
                  </div>
                </li>

                <li className="unit">
                  <Link className="unit-name" to="unidades/farol">
                    <p>Unidade Farol</p>
                  </Link>
                  <div className="unit-address-phone">
                    <p>Rua Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p>Eos perferendis odio deleniti </p>
                    <p>Tel: (82) 3336-8899</p>
                  </div>
                  <div className="unit-site">
                    <Link to="unidades/farol">
                      Website
                    </Link>
                  </div>
                </li>

                <li className="unit">
                  <Link className="unit-name" to="unidades/arapiraca">
                    <p>Unidade Arapiraca</p>
                  </Link>
                  <div className="unit-address-phone">
                    <p>Rua Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p>Eos perferendis odio deleniti </p>
                    <p>Tel: (82) 3336-8899</p>
                  </div>
                  <div className="unit-site">
                    <Link to="unidades/arapiraca">
                      Website
                    </Link>
                  </div>
                </li>



              </ul>

            </div>

          </div>
        </div>
      </>


    );
  }
}

export default Unit;
