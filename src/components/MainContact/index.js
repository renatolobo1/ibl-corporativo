import React, { Component } from 'react';
import './MainContact.scss';
import api from "../../services/api";
import ReCAPTCHA from "react-google-recaptcha";

class MainContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: "unidade",
      states: [],
      cities: [],
      units: [],
      faqs: [],
      selectedState: "",
      showPopUp: false,
      enableSubmit: false,
      message: {
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        corpo: "",
        unidade: "",
      }
    };
  }


  onChange = (value) => {
    console.log("Captcha value:", value);
    this.setState({ enableSubmit: true });
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

  loadFaqs = async () => {
    try {
      const response = await api.get(`question_answers`);
      const faqs = response.data;
      this.setState({ faqs });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadStates();
    this.loadCities();
    this.loadUnits();
    this.loadFaqs();
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

    if ( value === "franqueadora"){
      this.setState(prevState => ({
        message: {
          ...prevState.message,
          unidade: ""
        }
      }))
    }
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
        value={unit.email_message || unit.email}
      >
        {unit.title}
      </option>
    ))
  }

  renderFaq = () => {
    const faqs = this.state.faqs
    return faqs.map((faq, index) => (
      <div className="duvida" key={index}>
        <p className="pergunta">{faq.question}</p>
        <p className="resposta"
          dangerouslySetInnerHTML={{ __html: faq.answer }} />
      </div>
    ))
  }

  handleStateChange = (event) => {
    this.setState({ selectedState: event.target.value })
    console.log(this.state.selectedState)
  }

  handleChange = event => {
    const value = event.target.value

    switch (event.target.id) {
      case 'nome':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            nome: value
          }
        }))
        break;
      case 'email':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            email: value
          }
        }))
        break;
      case 'telefone':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            telefone: value
          }
        }))
        break;
      case 'select-unidade':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            unidade: value
          }
        }))
        break;
      case 'assunto':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            assunto: value
          }
        }))
        break;
      case 'corpo':
        this.setState(prevState => ({
          message: {
            ...prevState.message,
            corpo: value
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
        assunto: "",
        corpo: "",
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
      // const response = await axios.post(`https://www.iblsemlegenda.com.br/backoffice/messages`, { message });
      await api.post(`/messages`, { message });
      this.clearData()
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    const { selectedState } = this.state;
    const recaptchaRef = React.createRef();


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
              <form onSubmit={this.handleSubmit}>
                <div className={this.state.activeMenu === "duvidas" ? "d-none" : "col-md-3 form-contact"}>
                  <div className={this.state.activeMenu === "duvidas" ? "d-none" : "form-contact"}>

                    <input
                      type="text"
                      className="form-contact-input"
                      required
                      id="nome"
                      name="nome"
                      placeholder="NOME"
                      onChange={this.handleChange}
                      value={this.state.message.nome}
                    />
                    <input
                      type="text"
                      className="form-contact-input"
                      required
                      id="email"
                      name="email"
                      placeholder="EMAIL"
                      onChange={this.handleChange}
                      value={this.state.message.email}
                    />
                    <input
                      type="text"
                      className="form-contact-input"
                      id="telefone"
                      required
                      name="telefone"
                      placeholder="TELEFONE"
                      onChange={this.handleChange}
                      value={this.state.message.telefone}
                    />

                    <div className="cidade-estado">
                      <select
                        id="estado"
                        className={this.state.activeMenu === "franqueadora" ? "d-none" : "form-contact-input"}
                        name="states"
                        onChange={this.handleStateChange}
                        value={selectedState}
                      >
                        <option value="" disabled defaultValue>ESTADO</option>
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
                      name="unidade"
                      id="select-unidade"
                      onChange={this.handleChange}
                      value={this.state.message.unidade}
                    >
                      <option value="" disabled defaultValue>UNIDADE</option>
                      {this.renderUnits()}
                    </select>
                    <div>
                      <input type="checkbox" name="aceito" value="true" /> Aceito receber conteúdos do IBL
                    </div>
                  </div>
                </div>
                <div className={this.state.activeMenu === "duvidas" ? "d-none" : "col-md-3"}>
                  <div className={this.state.activeMenu === "duvidas" ? "d-none" : "form-contact"}>
                    <input type="text" className="form-contact-input" id="assunto" name="assunto" required placeholder="ASSUNTO" onChange={this.handleChange} value={this.state.message.assunto} />
                    <textarea rows="4" className="form-contact-input" id="corpo" placeholder="MENSAGEM" required onChange={this.handleChange} value={this.state.message.corpo}>
                    </textarea>
                    <div className="submit-container">

                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeW2fYUAAAAAIfeoBqXsmrHhVooqFMqiKq3C_Rn"
                        onChange={this.onChange}
                        size="compact"

                      />
                      <button
                        className={this.state.enableSubmit === false ? "d-none" : "form-contact-submit"}
                      >
                        Enviar
                      </button>
                      <div className={this.state.showPopUp === false ? "d-none" : "popup-alert"}>
                        <div>Mensagem enviada com sucesso!</div>
                      </div>

                    </div>
                  </div>
                </div>

              </form>
              <div
                className={this.state.activeMenu === "duvidas" ? "col-md-5 duvidas-container" : "d-none"}
              >
                {this.renderFaq()}
              </div>


            </div>
          </div>


        </div>
        {/* <div className="line-map"></div> */}

      </>


    );
  }
}

export default MainContact;
