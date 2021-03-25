import React from "react";
import Recuperacion from "../pages/Recuperacion";
import Login from "../pages/Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Rutas = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/:id?/:token?">
            <Recuperacion />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Rutas;
