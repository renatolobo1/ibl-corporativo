import React, { Component } from 'react';
import './DiscountForm.scss';
import api from "../../services/api";
import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card'
import ReCAPTCHA from "react-google-recaptcha";


class DiscountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      units: [],
      showPopUp: false,
      enableSubmit: false,
      message: {
        nome: "",
        email: "",
        telefone: "",
        unidade: "",
        assunto: "Formulário de desconto",
      },
      submited: false,
      openForm: "0",
    }
  }

  handleClickOnOpenForm = () => {
    this.setState({ ...this.state, openForm: "1" })
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
        value={unit.email_message}
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
        console.log(value)
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

  onChange = (value) => {
    console.log("Captcha value:", value);
    this.setState({ enableSubmit: true });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const message = this.state.message
    this.setState({ submited: true })

    console.log(message);

    try {
      await api.post(`/discount_messages`, { message });
      this.clearData()
      this.setState({ submited: false })

    } catch (err) {
      console.log(err);
    }
  }



    render() {
      const recaptchaRef = React.createRef();

        return (
            <div id="discount">
                <Accordion defaultActiveKey="1">
                    <div>
                        <Accordion.Toggle eventKey={this.props.openForm}>
                            <div>
                                <p className="cadastre">Cadastre-se e ganhe</p>
                                <p className="desconto">20% de desconto</p>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={this.props.openForm}>
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
                                  <option value="" defaultValue >Selecione unidade</option>
                                  {this.renderUnits()}
                                </select>
                                <div className="submit-container">

                                  <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LeW2fYUAAAAAIfeoBqXsmrHhVooqFMqiKq3C_Rn"
                                    onChange={this.onChange}
                                    size="compact"

                                  />
                                  <button
                                    className={this.state.enableSubmit === false ? "d-none" : "botao"}
                                    disabled={this.state.submited ? "disabled" : ""}
                                  >
                                    { this.state.submited ? "Aguarde..." : "Enviar" }
                                  </button>
                                  <div className={this.state.showPopUp === false ? "d-none" : "popup-discount-alert"}>
                                    <div>Mensagem enviada!</div>
                                  </div>
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

