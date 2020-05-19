import React, { Component } from 'react';
import './SignForm.scss';
import api from "../../services/api";
import ReCAPTCHA from "react-google-recaptcha";


class SignForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          courses: [],
          showPopUp: false,
          enableSubmit: false,
          message: {
            nome: "",
            email: "",
            telefone: "",
            curso: "",
            unidade: "",
            assunto: "Incrição Online"
          }
        }
    }

    componentDidMount() {
      this.loadCourses();
    }

    onChange = (value) => {
      console.log("Captcha value:", value);
      this.setState({ enableSubmit: true });
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
        const { courses } = this.state || [{ id: 1, title: "titulo" }];
        return courses.map(course => (
            <option
              key={course.id}
              value={course.title}>
              {course.title}
            </option>
        ))
    }

    renderAges = () => {
        const ages = [
            { id: 1, range: "5 - 10 anos" },
            { id: 2, range: "11 - 20 anos" },
            { id: 3, range: "21 - 30 anos" },
        ];
        return ages.map(age => (
            <option key={age.id} value={age.id}>{age.range}</option>
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

    clearData = async event => {
      this.setState(prevState => ({
        message: {
          nome: "",
          email: "",
          telefone: "",
          unidade: "",
          curso: "",
          assunto: "Inscrição Online"
        }
      }))

      this.setState(prevState => ({
        message: {
          ...prevState.message,
        },
        showPopUp: true
      }))

      setTimeout(
        function () {
          this.setState(prevState => ({
            message: {
              ...prevState.message,
            },
            showPopUp: false
          }))        }
          .bind(this),
        3000
      );
    }

    setEmail = async email => {
      this.setState(prevState => ({
        message: {
          ...prevState.message,
          unidade: email
        }
      }))
    }

    handleSubmit = async event => {
      event.preventDefault();
      const emailUnidade = this.props.email
      console.log(emailUnidade)

      await this.setEmail(emailUnidade)


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
      const recaptchaRef = React.createRef();


        return (

            <div className="inscricao">
              <form onSubmit={this.handleSubmit}>
                <p>Inscrição Online</p>
                <input
                type="text"
                required
                placeholder="nome"
                id="nome"
                name="nome"
                onChange={this.handleChange}
                value={this.state.message.nome}
                />
                <input
                type="email"
                required
                placeholder="email"
                id="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.message.email}
                />
                <input
                type="phone"
                required
                placeholder="Telefone"
                id="telefone"
                name="telefone"
                onChange={this.handleChange}
                value={this.state.message.telefone}
                />
                <input
                type="hidden"
                placeholder="email"
                id="email-unidade"
                name="email-unidade"
                value={this.props.email}
                />
                <div className="select-container">
                    <select
                    required
                    className="select-inscricao"
                    name="curso"
                    id="select-curso"
                    onChange={this.handleChange}
                    value={this.state.message.curso}
                    >
                    <option value="" disabled defaultValue>Curso</option>
                     {this.renderCourses()}
                    </select>
                </div>
                {/* <div className="button-inscricao">
                    <p>Enviar</p>
                </div> */}
                <div className="submit-container">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeW2fYUAAAAAIfeoBqXsmrHhVooqFMqiKq3C_Rn"
                    onChange={this.onChange}
                    size="compact"

                  />
                  <button
                    className={this.state.enableSubmit === false ? "d-none" : "button-inscricao"}>
                    <p>Enviar</p>
                  </button>
                  <div className={this.state.showPopUp === false ? "d-none" : "popup-discount-alert"}>
                    <div>Mensagem enviada!</div>
                  </div>
                </div>

              </form>

            </div>
        );
    }
}

export default SignForm;

