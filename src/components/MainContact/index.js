import React, { Component } from 'react';
import './MainContact.scss';

class MainContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: "unidade"
    };
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
    this.setState({activeMenu : value});
  }

  render() {
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
                    className={this.state.activeMenu === "unidade" ? "menu-item menu-active":"menu-item"}
                    onClick={this.setActiveMenu}
                  >
                    Fale com uma unidade
                  </div>
                  <div
                    id="franqueadora"
                    className={this.state.activeMenu === "franqueadora" ? "menu-item menu-active":"menu-item"}
                    onClick={this.setActiveMenu}
                    >
                      Fale com a franqueadora
                      </div>
                  <div
                  id="duvidas"
                  className={this.state.activeMenu === "duvidas" ? "menu-item menu-active":"menu-item"}
                  onClick={this.setActiveMenu}                  >
                    Dúvidas Frequentes - FAQ
                  </div>
                </div>
              </div>
              <div 
              className={this.state.activeMenu === "duvidas" ? "d-none":"col-md-3 form-contact"}
              >
                <div
                className={this.state.activeMenu === "duvidas" ? "d-none":"form-contact"}
                >
                  <input type="text" className="form-contact-input" name="LastName" placeholder="NOME" />
                  <input type="text" className="form-contact-input" name="LastName" placeholder="EMAIL" />
                  <input type="text" className="form-contact-input" name="LastName" placeholder="TELEFONE" />
                  <div className="cidade-estado">
                    <select
                      id="estado"
                      className={this.state.activeMenu === "franqueadora" ? "d-none":"form-contact-input"}
                      name="cars">
                      <option value="volvo">AL</option>
                      <option value="saab">AC</option>
                      <option value="fiat">PB</option>
                      <option value="audi">KK</option>
                    </select>
                    <select
                      id="cidade"
                      className={this.state.activeMenu === "franqueadora" ? "d-none":"form-contact-input"}
                      name="cars">
                      <option value="volvo">Maceió</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <select
                    className={this.state.activeMenu === "franqueadora" ? "d-none":"form-contact-input"}
                    name="cars">
                    <option value="volvo">Unidade Farol</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                  <div>
                    <input type="checkbox" name="vehicle2" value="Car" /> Aceito receber conteúdos do IBL
                  </div>


                </div>
              </div>
              <div 
                className={this.state.activeMenu === "duvidas" ? "d-none":"col-md-3"}
                >
                <div
                  className={this.state.activeMenu === "duvidas" ? "d-none":"form-contact"}
                >
                  <input type="text" className="form-contact-input" name="LastName" placeholder="ASSUNTO" />
                  <textarea rows="4" className="form-contact-input" placeholder="Mensagem">
                  </textarea>
                  <div className="form-contact-submit">Enviar</div>
                </div>
              </div>
                <div
                  className={this.state.activeMenu === "duvidas" ? "col-md-5 duvidas-container":"d-none"}
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
