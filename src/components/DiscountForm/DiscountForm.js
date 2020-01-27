import React, { Component } from 'react';
import './DiscountForm.scss';
import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card'

class DiscountForm extends Component {

    render() {
        return (
            <div id="discount">
                <Accordion defaultActiveKey="1">
                    <div>
                        <Accordion.Toggle eventKey="0">
                            <div>
                                <p className="cadastre">Cadastre-se e ganhe</p>
                                <p className="desconto">20% de desconto</p>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div className="form-container">
                                <input type="text" placeholder="Nome" />
                                <input type="email" placeholder="Email" />
                                <input type="phone" placeholder="Telefone" />
                                <input type="text" placeholder="Unidade" />
                                <div className="botao">Enviar</div>
                            </div>
                        </Accordion.Collapse>
                    </div>
                   
                </Accordion>
            </div>
        );
    }
}

export default DiscountForm;

