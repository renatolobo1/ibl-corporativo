import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import UnidadeIndexPage from './pages/Cursos/CursosIndexPage';
import IndexPage from './pages/Franquia/FranquiaIndexPage';

import Blog from './pages/Blog';
import Curso from './pages/Curso';
import Sobre from './pages/Sobre';
import Unidades from './pages/Unidades';

const Routes = () => (
    <HashRouter>
      <Switch>

        <Route exact path="/" component={IndexPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/cursos" component={UnidadeIndexPage} />
        <Route exact path="/unidade" component={UnidadeIndexPage} />
        <Route exact path="/curso" component={Curso} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/unidades" component={Unidades} />
        <Route exact path="/unidades/:id" component={UnidadeIndexPage} />

        <Route path="/signup" component={() => <h1>SignUp</h1>} />
        {/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
        <Route path="*" component={UnidadeIndexPage} />
      </Switch>
    </HashRouter>
);

export default Routes;
