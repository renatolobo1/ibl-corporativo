import React, { Component } from 'react';
import './SignForm.scss';

class SignForm extends Component {

    render() {
        return (

            <div className="inscricao">
                <p>Inscrição Online</p>
                <input type="text" placeholder="nome" />
                <input type="email" placeholder="email" />
                <input type="phone" placeholder="Telefone" />
                <div className="select-container">
                    <select className="select-inscricao" name="cars">
                        <option value="volvo">Curso</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select className="select-inscricao" name="cars">
                        <option value="volvo">Faixa Etária</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="button-inscricao">
                    <p>Enviar</p>
                </div>
            </div>
        );
    }
}

export default SignForm;

