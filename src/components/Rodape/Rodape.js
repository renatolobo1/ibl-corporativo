import React, { Component } from 'react';
import './Rodape.scss';
import logo_branca from "../../assets/images/logo_ibl_branca.png";
import franqueado from "../../assets/images/seja-franqueado.png";

class Navegacao extends Component {
    
  render() {
    return (
      <div className="rodape">
        <div className="logo-container">
          <img src={logo_branca} />
        </div>
        <div className="info-container">
          
          <div className="social-franqueado">
            <div className="social">
              <div className="social-text">
                <p>Visite nossas</p>
                <p>redes sociais</p>
              </div>
              <div className="social-icons">
                <a href="#">
                  <div className="icone facebook">facebook</div>
                </a>
                <a href="#">
                  <div className="icone instagram">instagram</div>
                </a>
                <a href="#">
                  <div className="icone youtube">youtube</div>
                </a>
              </div>
            </div>
            <div className="franqueado">
              <img src={franqueado} />
            </div>
          </div>
          <div>
            2020 Instituto Brasileiro de Línguas. Todos os direitos reservados. Instituto Brasileiro de Línguas Franquias.
          </div>
            
        
        </div>
      </div>
    );
  }
}

export default Navegacao;