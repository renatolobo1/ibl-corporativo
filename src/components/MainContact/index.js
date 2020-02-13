import React, { Component } from 'react';
import './MainContact.scss';
import api from "../../services/api";

class MainContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: "unidade",
      states: [],
      cities: [],
      units: [],
      selectedState: "AL"
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

  static defaultProps = {
    center: {
      lat: -9.6531734,
      lng: -35.7169135
    },
    zoom: 16
  };

  setActiveMenu = event => {
    const value = event.target.id
    this.setState({ activeMenu: value });
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

  render() {
    const { selectedState } = this.state;

    return (
      <>
        <div id="contact">
          <div className="container">
            <div className="row">
              <aside className="col-md-3">
                <div className="contact-label">
                  <p>Contato</p>
                </div>
                <div className="fale">
                  <p>Fale</p>
                  <p>Conosco</p>
                </div>
              </aside>

              <div className=" col-md-3">
                <div className="menu-container">
                  <div
                    id="unidade"
                    className={this.state.activeMenu === "unidade" ? "menu-item menu-active" : "menu-item"}
                    onClick={this.setActiveMenu}
                  >
                    Fale com uma unidade
                  </div>
                  <div
                    id="franqueadora"
                    className={this.state.activeMenu === "franqueadora" ? "menu-item menu-active" : "menu-item"}
                    onClick={this.setActiveMenu}
                  >
                    Fale com a franqueadora
                      </div>
                  <div
                    id="duvidas"
                    className={this.state.activeMenu === "duvidas" ? "menu-item menu-active" : "menu-item"}
                    onClick={this.setActiveMenu}                  >
                    Dúvidas Frequentes - FAQ
                  </div>
                </div>
              </div>
              <div
                className={this.state.activeMenu === "duvidas" ? "d-none" : "col-md-3 form-contact"}
              >
                <div
                  className={this.state.activeMenu === "duvidas" ? "d-none" : "form-contact"}
                >
                  <input type="text" className="form-contact-input" name="LastName" placeholder="NOME" />
                  <input type="text" className="form-contact-input" name="LastName" placeholder="EMAIL" />
                  <input type="text" className="form-contact-input" name="LastName" placeholder="TELEFONE" />
                  <div className="cidade-estado">
                    <select
                      id="estado"
                      className={this.state.activeMenu === "franqueadora" ? "d-none" : "form-contact-input"}
                      name="states"
                      onChange={this.handleStateChange}
                      value={selectedState}
                    >
                      {this.renderStates()}
                    </select>
                    {/* <select
                      id="cidade"
                      className={this.state.activeMenu === "franqueadora" ? "d-none" : "form-contact-input"}
                      name="cities"
                      onChange={this.handleCityChange}>
                      {this.renderCities()}
                    </select> */}
                  </div>
                  <select
                    className={this.state.activeMenu === "franqueadora" ? "d-none" : "form-contact-input"}
                    name="cars"
                  >
                    {this.renderUnits()}
                  </select>
                  <div>
                    <input type="checkbox" name="vehicle2" value="Car" /> Aceito receber conteúdos do IBL
                  </div>


                </div>
              </div>
              <div
                className={this.state.activeMenu === "duvidas" ? "d-none" : "col-md-3"}
              >
                <div
                  className={this.state.activeMenu === "duvidas" ? "d-none" : "form-contact"}
                >
                  <input type="text" className="form-contact-input" name="LastName" placeholder="ASSUNTO" />
                  <textarea rows="4" className="form-contact-input" placeholder="Mensagem">
                  </textarea>
                  <div className="form-contact-submit">Enviar</div>
                </div>
              </div>
              <div
                className={this.state.activeMenu === "duvidas" ? "col-md-5 duvidas-container" : "d-none"}
              >
                <div className="duvida">
                  <p className="pergunta">Lorem Ipsum</p>
                  <p className="resposta">Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot
                    </p>
                </div>
                <div className="duvida">
                  <p className="pergunta">Lorem Ipsum</p>
                  <p className="resposta">Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot
                    </p>
                </div>
                <div className="duvida">
                  <p className="pergunta">Lorem Ipsum</p>
                  <p className="resposta">Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot Lorem Ipsum dolot
                    Lorem Ipsum dolot Lorem Ipsum dolot
                    </p>
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

export default MainContact;
