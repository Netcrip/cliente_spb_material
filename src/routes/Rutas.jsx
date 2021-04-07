import React from "react";
import Recuperacion from "../pages/Recuperacion";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CargaPresentismo from "../pages/CargaPresentismo";
import Page404 from "../pages/Page404";
import Personal  from '../pages/Personal'

const Rutas = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact  path="/Presentismo">
            <Layout Page={CargaPresentismo} />
          </Route>
          <Route exact  path="/home">
            <Layout Page={Home} />
          </Route>      
          <Route exact  path="/login">
            <Layout Page={Home} />
          </Route> 
          <Route exact  path="/personal">
            <Layout Page={Personal} />
          </Route>    
          <Route exact strict path="/recuperacion/:id?/:token?">
            <Recuperacion />
          </Route>
          <Route >
            <Page404/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Rutas;
