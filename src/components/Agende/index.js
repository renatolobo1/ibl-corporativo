import React, { Component } from 'react';
import './Agende.scss';
import api from "../../services/api";
import ReCAPTCHA from "react-google-recaptcha";


class Agende extends Component {
  constructor(props) {
    super(props);

    this.state = {
      units: [],
      courses: [],
      enableSubmit: false,
      showPopUp: false,
      message: {
        nome: "",
        email: "",
        telefone: "",
        curso: "",
        unidade: "",
      }

    };
  }

  componentDidMount() {
    this.loadUnits();
    this.loadCourses();
  }

  loadCourses = async () => {
    try {
      const response = await api.get(`courses/index`);
      const courses = response.data;

      this.setState({ courses });
    } catch (err) {
      console.log(err);
    }
  }

  renderCourses = () => {
    const{ courses } = this.state

    return courses.map((course, index) => (
      <option
        key={index}
        value={course.title}
      >
        {course.title}
      </option>
    ))
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

  renderUnits = () => {
    const{ units } = this.state

    return units.map((unit, index) => (
      <option
        key={index}
        value={unit.email_message || unit.email}
      >
        {unit.title}
      </option>
    ))
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
        case 'select-curso':
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

  // handler do captcha
  onChange = (value) => {
    console.log("Captcha value:", value);
    this.setState({ enableSubmit: true });
  }

  clearData = async event => {
    this.setState(prevState => ({
      message: {
        nome: "",
        email: "",
        telefone: "",
        unidade: "",
        curso: "",
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
    const recaptchaRef = React.createRef();

    return (
      <>
        <div id="agende">
          <div className="container">

            <div className="row">

              <div className="col-md-12">
                <div className="text-container">
                  <p className="agende">Agende agora sua experiência IBL</p>
                  <p className="viva">Viva o mundo sem legenda!</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                <div className="col-md-12">
                  <div className="form-agende">
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

                    <select
                      className="form-contact-input"
                      required
                      name="unidade"
                      id="select-unidade"
                      onChange={this.handleChange}
                      value={this.state.message.unidade}
                    >
                      <option value="" disabled defaultValue>UNIDADE</option>
                      {this.renderUnits()}
                    </select>

                    <select
                      className="form-contact-input"
                      name="curso"
                      required
                      id="select-curso"
                      onChange={this.handleChange}
                      value={this.state.message.curso}
                    >
                      <option value="" disabled defaultValue>CURSO</option>
                      {this.renderCourses()}
                    </select>
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
              </div>

            </div>

          </div>
        </div>

      </>


    );
  }
}

export default Agende;
