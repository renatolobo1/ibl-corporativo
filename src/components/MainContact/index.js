import React, { Component } from 'react';
import './MainContact.scss';

class MainContact extends Component {
  static defaultProps = {
    center: {
      lat: -9.6531734,
      lng: -35.7169135
    },
    zoom: 16
  };

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
                  <div className="menu-item">Fale com uma unidade</div>
                  <div className="menu-item">Fale com a franqueadora</div>
                  <div className="menu-item">Dúvidas Frequentes - FAQ</div>
                </div>
              </div>
              <div className=" col-md-3">
                <div className="form-contact">
                  <input type="text" className="form-contact-input" name="LastName" placeholder="NOME" />
                  <input type="text" className="form-contact-input" name="LastName" placeholder="EMAIL" />
                  <input type="text" className="form-contact-input" name="LastName" placeholder="TELEFONE" />
                  <div className="cidade-estado">
                    <select id="estado" className="form-contact-input" name="cars">
                      <option value="volvo">AL</option>
                      <option value="saab">AC</option>
                      <option value="fiat">PB</option>
                      <option value="audi">KK</option>
                    </select>
                    <select id="cidade" className="form-contact-input" name="cars">
                      <option value="volvo">Maceió</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <select className="form-contact-input" name="cars">
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
              <div className=" col-md-3">
                <div className="form-contact">
                  <input type="text" className="form-contact-input" name="LastName" placeholder="ASSUNTO" />
                  <textarea rows="4" className="form-contact-input" placeholder="Mensagem">
                  </textarea>
                  <div className="form-contact-submit">Enviar</div>
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
