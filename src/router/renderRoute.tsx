import { IRoute } from "entitys/route";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import renderRoutesMap from "./routesMap";

const renderRoutes = (routes: Array<IRoute>, extraProps = {}, switchProps = {} ) => {
  return (
    <BrowserRouter>
      <Switch {...switchProps}>
        { renderRoutesMap(routes) }
      </Switch>
    </BrowserRouter>
  )
}

export default renderRoutes