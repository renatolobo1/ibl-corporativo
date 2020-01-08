import React, { Component } from 'react';
import './News.scss';
import paris from './paris.jpg'
import icon from './airplane-icon.png'
import search from './search.png'

class Unit extends Component {

  renderNews(){
    return(
      <div className="col-md-4 col-sm-12">
        <div className="post">
          <div className="post-label">
            <img className="post-icon" src={icon} alt="" srcset=""/>
            teste
          </div>
          <img className="post-pic" src={paris} alt="paris"/>
          <p className="post-text">Treine seu inglês com os indicados ao Oscar 2019</p>
          <div className="post-button">Leia Mais</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <div id="news" className="container-fluid">
          <div className="row">
            <aside className="col-md-3">
              <div className="label">
                <p>Notícias</p>
              </div>
              <div className="blog">
                <p>Blog</p>
                <p>IBL</p>
              </div>
            </aside>

            <div className="posts-container col-md-6">

              <div className="row search-post">
                <div className="search-icon">
                  <img className="" src={search} alt="" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar por Post"
                />
                <div className="social-icons">
                  <a href="#">
                    <div className="icone facebook">facebook</div>
                  </a>
                  <a href="#">
                    <div className="icone instagram">instagram</div>
                  </a>
                  <a href="#">
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
              {this.renderNews()}
              {this.renderNews()}
              {this.renderNews()}
              {this.renderNews()}
              {this.renderNews()}
              {this.renderNews()}
            </div>
            </div>

          </div>
          <div id="side-tags" className="col-md-3">teste</div>

        </div>
        </div>
      </>


    );
  }
}

export default Unit;
