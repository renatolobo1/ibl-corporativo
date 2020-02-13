import React, { Component } from 'react';
import './Blog.scss'
import api from "../../services/api";
import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import News from '../../components/News/News';

class BlogUnidade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unit: {},
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
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="">
        <Topbar unit={this.state.unit.title} />
        <Nav
          sobre="false"
          // unit="unidade"
          unit={this.props.match.params.id}
          cursosUnidade={`${this.props.match.params.id}`}
          blogUnidade={`${this.props.match.params.id}`}
        />
        <News />

        <Footer />
      </div>
    );
  }
}

export default BlogUnidade;
