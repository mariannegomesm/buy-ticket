import React from "react";

import { store } from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/perfil" component={Perfil} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;