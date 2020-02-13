import React, { Component } from 'react';
import './DiscountForm.scss';
import api from "../../services/api";
import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card'

class DiscountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      units: [],
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
    this.loadUnits();
  }

  renderUnits = () => {
   const {units} = this.state;

    return units.map(unit => (
      <option key={unit.id} value="volvo">{unit.title}</option>
    ))
  }


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
                                <select
                                  className=""
                                  name="cars">
                                  {this.renderUnits()}
                                </select>
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

