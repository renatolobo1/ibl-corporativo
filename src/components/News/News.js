import React, { Component } from 'react';
import api from "../../services/api";

import './News.scss';
import paris from './paris.jpg'
import icon from './airplane-icon.png'
import search from './search.png'

class Unit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  loadNews = async () => {
    try {
      const response = await api.get(`posts`);
      const news = response.data;
      this.setState({ news });
      console.log(this.state.news)
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadNews();
  }

  renderStates = () => {
    const { states } = this.state || [{ id: 1, title: "titulo" }];
    return states.map(state => (
      <li>
        <p onClick={() => this.handleClick(state)}>{state}</p>
      </li>
    ))
  }

  renderCategories= (tags) => {
    return tags.map(tag => (
      `${tag.title}  `
    ))
  }


  renderNews= () => {
    const { news } = this.state || [{ id: 1, title: "titulo" }];
    return news.map(post => (
      <div className="col-md-12 col-sm-12 post-container">
        <div className="post">
          {/* <div className="post-label">
            <img className="post-icon" src={icon} alt="" srcSet="" />
            {post.title.substring(0,18)+"..."}
          </div> */}
          <div className="post-pic-container">
            <img className="post-pic" src={paris} alt="paris" />
          </div>
          <div className="post-info">
            <h3 className="post-title" >{post.title}</h3>
            <div className="post-body"
              dangerouslySetInnerHTML={{ __html: post.body.substring(0,400)+"..." }} />
            <div className="post-footer">
              <div className="post-tags">tags: {this.renderCategories(post.categories)} </div>
              <div className="post-button">Leia Mais</div>
            </div>
          </div>
        </div>
      </div>
    ))
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
                <input
                  type="text"
                  placeholder="Buscar por Post"
                />
                <div className="social-icons">
                  <a href="https://www.facebook.com/iblbrasil/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="icone facebook">facebook</div>
                  </a>
                  <a href="https://www.instagram.com/ibl.mczfarol/"
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
                <div className="tag">
                  <img className="post-icon" src={icon} alt="" />
                  <p>Viagens</p>
                </div>
                <div className="tag">
                  <img className="post-icon" src={icon} alt="" />
                  <p>Música</p>
                </div>
                <div className="tag">
                  <img className="post-icon" src={icon} alt="" />
                  <p>Acontece no IBL</p>
                </div>
                <div className="tag">
                  <img className="post-icon" src={icon} alt="" />
                  <p>Cinema</p>
                </div>
                <div className="plus-tag">
                  <p>+</p>
                </div>

              </div>

              <div className="container-fluid">

                <div className="row">
                  {this.renderNews()}
                </div>
              </div>

            </div>
            <div id="side-tags" className="col-md-2">
              <div id="side-tags-container" className="row">
                <p className="side-tag">Inglês</p>
                <p className="side-tag">Acontece no IBL</p>
                <p className="side-tag">Design</p>
                <p className="side-tag">Dicas</p>
                <p className="side-tag">Músicas</p>
                <p className="side-tag">Italiano</p>
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
