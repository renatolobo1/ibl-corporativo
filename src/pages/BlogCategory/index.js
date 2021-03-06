import React, { Component } from 'react';
import './Blog.scss'

import Nav from '../../components/Nav/Nav';
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import NewsCategory from '../../components/NewsCategory/NewsCategory';

class BlogCategory extends Component {

  render() {
    return (
      <div className="">
        <Topbar />
        <Nav contact="/#contact"/>
        <NewsCategory category={ this.props.match.params.id }/>
        <Footer />
      </div>
    );
  }
}

export default BlogCategory;
