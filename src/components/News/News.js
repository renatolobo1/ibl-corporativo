import React, { Component } from 'react';
import api from "../../services/api";
import { HashLink as Link } from 'react-router-hash-link';

import './News.scss';
import icon from './airplane-icon.png'
import search from './search.png'

class Unit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [
        {
          categories:[{id:'', title:''}],
          image:{},
          body:'',
        }
      ],
      categories: [],
      selectedCategory: '',
      query: ''
    }
  }

  handleSearchSubmit = async (event) => {
    event.preventDefault();

    let query = this.state.query
    if (query !== '') {
      try {
        const response = await api.get(`search`, { params: { query } });
        const news = response.data;
        this.setState({ news });
        console.log(this.state.news)
      } catch (err) {
        console.log(err);
      }
    } else {
      this.loadNews();
    }

  }

  handleChangeSearch = event => {
    const value = event.target.value

    switch (event.target.id) {
      case 'query':
        this.setState({ query: value, selectedCategory: '' });
        break;

      default:
        break;
    }
  }

  loadNews = async () => {
    try {
      const response = await api.get(`posts`);
      const news = response.data;
      this.setState({ news });
      console.log(this.state.news)
      console.log(this.state.selectedCategory)
    } catch (err) {
      console.log(err);
    }
  }

  loadCategories = async () => {
    try {
      const response = await api.get(`posts/categories`);
      const categories = response.data;
      this.setState({ categories });
      console.log(this.state.categories)
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadNews();
    this.loadCategories();
  }

  renderPostCategories = (tags) => {
    return tags.map(tag => (
      `${tag.title}  `
    ))
  }

  renderCategories = () => {
    const tags = this.state.categories
    return tags.map(tag => (
      <div className="tag" onClick={() => this.handleClick(tag.slug)}>
        <img className="post-icon" src={icon} alt="" />
        <p>{tag.title}</p>
      </div>
    ))
  }

  renderBestCategories = () => {
    const tags = this.state.categories
    return tags.map(tag => (
      <p className="side-tag" onClick={() => this.handleClick(tag.slug)}>{tag.title}</p>
    ))
  }

  handleClick = (category) => {
    this.setState({ selectedCategory: category })
    console.log(this.state.selectedCategory)
  }


  renderNews = () => {
    const categoria = this.state.selectedCategory
    const { news } = this.state || [{ id: 1, title: "titulo", categories: [{title: "categoria", id: 2}] }];

    if(categoria === ''){

      return news.map(post => (
        <div className="col-md-12 col-sm-12 post-container">
          <Link className="" to={`/blog/${post.slug}`}>

            <div className="post">
              {/* <div className="post-label">
                <img className="post-icon" src={icon} alt="" srcSet="" />
                {post.title.substring(0,18)+"..."}
              </div> */}
              <div className="post-pic-container">
                <img className="post-pic" src={post.image.url} alt="paris" />
              </div>
              <div className="post-info">
                <h3 className="post-title" >{post.title}</h3>
                <div className="post-body"
                  dangerouslySetInnerHTML={{ __html: post.body.substring(0, 400) + "..." }} />
                <div className="post-footer">
                  <div className="post-tags">Tags: {this.renderPostCategories(post.categories)} </div>
                  <div className="post-button">Leia Mais</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))

    }else{
      var filteredNews =  news.filter(function(noticia) {
        for (let i = 0; i < noticia.categories.length; ++i) {
          var categorias = Object.values(noticia.categories[i])
          if(categorias.includes(categoria)){
            return categorias;
          }
        }
      });

      return filteredNews.map(post => (
        <div className="col-md-12 col-sm-12 post-container">
          <Link className="" to={`/blog/${post.slug}`}>

            <div className="post">
              {/* <div className="post-label">
                <img className="post-icon" src={icon} alt="" srcSet="" />
                {post.title.substring(0,18)+"..."}
              </div> */}
              <div className="post-pic-container">
                <img className="post-pic" src={post.image.url} alt="paris" />
              </div>
              <div className="post-info">
                <h3 className="post-title" >{post.title}</h3>
                <div className="post-body"
                  dangerouslySetInnerHTML={{ __html: post.body.substring(0, 400) + "..." }} />
                <div className="post-footer">
                  <div className="post-tags">Tags: {this.renderPostCategories(post.categories)} </div>
                  <div className="post-button">Leia Mais</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))


    }

  }

  render() {
    return (
      <>
        <div id="news" className="container-fluid">
          <div className="row">
            <aside className="col-md-2">
              <div className="label">
                <p>Notícias</p>
              </div>
              <div className="blog">
                <p>Blog</p>
                <p>IBL</p>
              </div>
            </aside>

            <div className="posts-container col-md-8">

              <div className="row search-post">
                <div className="search-icon">
                  <img className="" src={search} alt="" />
                </div>
                <form onSubmit={this.handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Buscar por Post"
                    id="query"
                    onChange={this.handleChangeSearch}
                    value={this.state.search}
                  />
                </form>
                <div className="social-icons">
                  <a href="https://www.facebook.com/iblbrasil/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="icone facebook">facebook</div>
                  </a>
                  <a href="https://www.instagram.com/ibl.brasil/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="icone instagram">instagram</div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCGU3q5arObNXK8RjstPqmmw"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="icone youtube">youtube</div>
                  </a>
                </div>
              </div>

              <div className="row tags">
                {this.renderBestCategories()}


                {/* {this.renderCategories()} */}
                {/* <div className="plus-tag">
                  <p>+</p>
                </div> */}

              </div>

              <div className="container-fluid">

                <div className="row">
                  {this.renderNews()}
                </div>
              </div>

            </div>
            <div id="side-tags" className="col-md-2">
              <div id="side-tags-container" className="row">
                {this.renderBestCategories()}
                <p className="side-tag">Posts mais lidos</p>
              </div>
            </div>

          </div>
        </div>
      </>


    );
  }
}

export default Unit;
