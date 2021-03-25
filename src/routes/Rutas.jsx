import React from "react";
import Recuperacion from "../pages/Recuperacion";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import CargaPresentismo from '../pages/CargaPresentismo'


const Rutas = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/Presentismo">
            <Layout  Page={CargaPresentismo}/>
          </Route>
          <Route path="/home">
            <Layout  Page={Home}/>
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
