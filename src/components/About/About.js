import React, { Component } from 'react';
import './About.scss';
import api from "../../services/api";
import { HashLink as Link } from 'react-router-hash-link';
import woman from './11233.png'
import { Redirect } from 'react-router-dom';


import icone1 from './Icone_1.png'
import icone2 from './Icone_2.png'
import icone3 from './Icone_3.png'
import icone4 from './Icone_4.png'
import icone5 from './Icone_5.png'

import bandeira1 from './Bandeira_01.png'
import bandeira2 from './Bandeira_02.png'
import bandeira3 from './Bandeira_03.png'
import bandeira4 from './Bandeira_04.png'
import bandeira5 from './Bandeira_05.png'
import bandeira6 from './Bandeira_06.png'


class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: {},
    }
  }

  componentDidMount() {
    this.loadPage();
  }

  loadPage = async () => {
    try {
      const response = await api.get(`pages/sobre`);
      const page = response.data;
      this.setState({ page });
      // console.log(this.state.courses)
    } catch (err) {
      console.log(err);
      this.setState({
        redirect: true
      })
    }
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/" />; }

    return (
      <div id="about" >
        <div className="container" style={{backgroundImage: `url(${woman})`}}>
          <div className="row" >

            <aside className="col-md-3">
              <div className="sobre">
                <p>Sobre</p>
              </div>
              <div className="historia">
                <p>Nossa</p>
                <p>História</p>
              </div>
            </aside>

            <div className="col-md-6 content">
              <div className="container">
                <div className="row">
                  <div className=""
                    dangerouslySetInnerHTML={{ __html: this.state.page.body }} />
                    <h3>Nossos Cursos</h3>
                   <div className="cursos">
                    <img src={bandeira1} />
                    <img src={bandeira2} />
                    <img src={bandeira3} />
                    <img src={bandeira4} />
                    <img src={bandeira5} />
                    <img src={bandeira6} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
            </div>

          </div>

        </div>
        <div className="detalhes">
          <img src={icone1} />
          <img src={icone2} />
          <img src={icone3} />
          <img src={icone4} />
          <img src={icone5} />
        </div>
      </div>
    );
  }
}

export default About;
