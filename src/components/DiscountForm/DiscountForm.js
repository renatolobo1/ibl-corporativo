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
      showPopUp: false,
      message: {
        nome: "",
        email: "",
        telefone: "",
        unidade: "",
        assunto: "Formulário de desconto"
      }
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

      <option
        key={unit.id}
        value={unit.email}
      >
        {unit.title}
      </option>
    ))
  }

  handleChange = event => {
    const value = event.target.value

    switch (event.target.id) {
      case 'd-nome':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            nome: value
          }
        }))
        break;
      case 'd-email':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            email: value
          }
        }))
        break;
      case 'd-telefone':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            telefone: value
          }
        }))
        break;
      case 'd-select-unidade':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            unidade: value
          }
        }))
        break;
      case 'curso':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            curso: value
          }
        }))
        break;
      default:
        break;
    }
  }

  clearData = async event => {
    this.setState(prevState => ({
      message: {
        nome: "",
        email: "",
        telefone: "",
        unidade: "",
        curso: ""
      }
    }))
    this.setState({ showPopUp: true });

    setTimeout(
      function () {
        this.setState({ showPopUp: false });
      }
        .bind(this),
      3000
    );
  }

  handleSubmit = async event => {
    event.preventDefault();
    const message = this.state.message
    console.log(message);

    try {
      await api.post(`/discount_messages`, { message });
      this.clearData()
    } catch (err) {
      console.log(err);
    }
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
                            <form onSubmit={this.handleSubmit}>

                                <input
                                type="text"
                                placeholder="Nome"
                                id="d-nome"
                                name="nome"
                                onChange={this.handleChange}
                                value={this.state.message.nome}
                                />
                                <input
                                type="email"
                                placeholder="Email"
                                id="d-email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.message.email}
                                />
                                <input
                                type="phone"
                                placeholder="Telefone"
                                id="d-telefone"
                                name="telefone"
                                onChange={this.handleChange}
                                value={this.state.message.telefone}
                                />
                                <select
                                  className=""
                                  id="d-select-unidade"
                                  onChange={this.handleChange}
                                  value={this.state.message.unidade}
                                  >
                                  {this.renderUnits()}
                                </select>
                                <button className="botao">Enviar</button>
                                <div className={this.state.showPopUp === false ? "d-none" : "popup-discount-alert"}>
                                  <div>Mensagem enviada!</div>
                                </div>

                            </form>

                            </div>
                        </Accordion.Collapse>
                    </div>

                </Accordion>
            </div>
        );
    }
}

export default DiscountForm;

