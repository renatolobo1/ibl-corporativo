import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CursosIndexPage from './pages/Cursos/CursosIndexPage';
import CursoIndexPage from './pages/Curso';
import IndexPage from './pages/Franquia/FranquiaIndexPage';

import Blog from './pages/Blog';
import Curso from './pages/Curso';
import Unidades from './pages/Unidades';

const Routes = () => (
    <HashRouter>
      <Switch>

        <Route exact path="/" component={IndexPage} />
        <Route exact path="/cursos" component={CursosIndexPage} />
        <Route exact path="/curso" component={CursoIndexPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/curso" component={Curso} />
        <Route exact path="/unidades" component={Unidades} />

        <Route path="/signup" component={() => <h1>SignUp</h1>} />
        {/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
        <Route path="*" component={CursosIndexPage} />
      </Switch>
    </HashRouter>
);

export default Routes;
