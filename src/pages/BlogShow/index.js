import React, { Component } from 'react';
import './Blog.scss'
import api from "../../services/api";

import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import NewsShow from '../../components/NewsShow/NewsShow';

class CursosIndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        categories:[],
        image:{},
        body: ""
      },
    }
  }

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    try {
      const response = await api.get(`posts/${this.props.match.params.id}`);
      const post = response.data;
      this.setState({ post });
      console.log(this.state.post)
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav contact="/#contact"/>
        <NewsShow post={this.state.post}/>

        <Footer />
      </div>
    );
  }
}

export default CursosIndexPage;
