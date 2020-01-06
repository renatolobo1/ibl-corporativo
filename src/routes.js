import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CursosIndexPage from './pages/Cursos/CursosIndexPage';
import Blog from './pages/Blog';
import Curso from './pages/Curso';
import Unidades from './pages/Unidades';

// import { isAuthenticated } from "./services/auth";
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
// );

const Routes = () => (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={CursosIndexPage} />
        <Route exact path="/cursos" component={CursosIndexPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/curso" component={Curso} />
        <Route exact path="/unidades" component={Unidades} />

        <Route path="/signup" component={() => <h1>SignUp</h1>} />
        {/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
);

export default Routes;
