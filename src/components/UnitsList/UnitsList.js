import React, { Component } from 'react';
import './UnitsList.scss';
import paris from './paris.jpg'
import icon from './airplane-icon.png'
import search from './search.png'

class Unit extends Component {

  render() {
    return (
      <>
        <div id="units-list">
          <aside className="col-3">
            <div className="label">
              <p>Unidades IBL</p>
            </div>
            <div className="unidades">
              <p>Lista de</p>
              <p>nossas</p>
              <p>unidades</p>
            </div>
          </aside>
          <div className="state-list col-3">
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
          <div className="units-list col-6">
            <ul>
              <li className="unit">
                <div className="unit-name">
                  <p>Unidade Arapiraca</p>
                </div>
                <div className="unit-address-phone">
                  <p>Rua Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  <p>Eos perferendis odio deleniti </p>
                  <p>Tel: (82) 3336-8899</p>
                </div>
                <div className="unit-site">
                  <a href="">Website</a>
                </div>
              </li>

              <li className="unit">
                <div className="unit-name">
                  <p>Unidade Arapiraca</p>
                </div>
                <div className="unit-address-phone">
                  <p>Rua Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  <p>Eos perferendis odio deleniti </p>
                  <p>Tel: (82) 3336-8899</p>
                </div>
                <div className="unit-site">
                  <a href="">Website</a>
                </div>
              </li>

              <li className="unit">
                <div className="unit-name">
                  <p>Unidade Arapiraca</p>
                </div>
                <div className="unit-address-phone">
                  <p>Rua Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  <p>Eos perferendis odio deleniti </p>
                  <p>Tel: (82) 3336-8899</p>
                </div>
                <div className="unit-site">
                  <a href="">Website</a>
                </div>
              </li>



            </ul>

          </div>

        </div>
      </>


    );
  }
}

export default Unit;
