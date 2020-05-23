import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import UnidadeIndexPage from './pages/Cursos/CursosIndexPage';
import IndexPage from './pages/Franquia/FranquiaIndexPage';

import Blog from './pages/Blog';
import BlogCategory from './pages/BlogCategory';
import BlogShow from './pages/BlogShow';
import BlogUnidade from './pages/BlogUnidade';
import Curso from './pages/Curso';
import Sobre from './pages/Sobre';
import Unidades from './pages/Unidades';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id" component={BlogShow} />
      <Route exact path="/blog/category/:id" component={BlogCategory} />
      <Route exact path="/cursos" component={UnidadeIndexPage} />
      <Route exact path="/unidade" component={UnidadeIndexPage} />
      <Route exact path="/curso" component={Curso} />
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/unidades" component={Unidades} />
      <Route exact path="/:id" component={UnidadeIndexPage} />
      <Route exact path="/:id/blog" component={BlogUnidade} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
    </Switch>
  </HashRouter>
);

export default Routes;
