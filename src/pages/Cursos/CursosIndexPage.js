import React, { Component } from 'react';
import './Cursos.scss'
import api from "../../services/api";
import Nav from '../../components/Nav/Nav';
import Banner from '../../components/Banner/Banner';
import Valencia from '../../components/Valencia/Valencia';
import Certifications from '../../components/Certifications/Certifications';
import Contact from '../../components/Contact/Contact';
import Languages from '../../components/Languages/Languages';
import Unit from '../../components/Unit/Unit';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import { Redirect } from 'react-router-dom';

class CursosIndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unit: {
        address:{},
        images:[],
        cover:{},
      },
      redirect: null
    }
  }

  componentDidMount() {
    this.loadUnit();
  }

  loadUnit = async () => {
    try {
      const response = await api.get(`units/${this.props.match.params.id}`);
      const unit = response.data;
      this.setState({ unit });
      // console.log(unit)
    } catch (err) {
      console.log(err);
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/" />; }
    // console.log(this.state.unit.cover.url)

    return (
      <div className="">
        <Topbar
          unit={this.state.unit.title}
        />
        <Nav
          sobre="false"
          // unit="unidade"
          unit={this.props.match.params.id}
          cursosUnidade={`${this.props.match.params.id}`}
          blogUnidade={`${this.props.match.params.id}`}
        />
        {/* <SlideShow /> */}
        <Banner
          cover={this.state.unit.cover.url}
          email={this.state.unit.email}
        />
        <Languages />
        <Unit
          unit={this.state.unit.title}
          street={this.state.unit.address.street}
          city={this.state.unit.address.city}
          state={this.state.unit.address.state}
          number={this.state.unit.address.number}
          neighborhood={this.state.unit.address.neighborhood}
          email={this.state.unit.email}
          phone={this.state.unit.phone}
          site={this.state.unit.site}
          gallery={this.state.unit.images}
        />
        <Valencia />
        <Contact
          unitEmail={this.state.unit.email}
          phone={this.state.unit.phone}
          latitude={this.state.unit.address.latitude}
          longitude={this.state.unit.address.longitude}
          idUnidade={this.props.match.params.id}
        />
        <Certifications />
        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
