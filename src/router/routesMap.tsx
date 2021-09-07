import { IRoute } from "entitys/route";
import React from "react";
import { Route } from "react-router-dom";
import RouteGuard from "./routeGuard";

const renderRoutesMap = (routes: Array<IRoute>) => {
  return routes.map((route: IRoute, index: any) => {
      <Route key={index} path={route.path} render={props => (
        <RouteGuard  { ...props } {...route}></RouteGuard>
      )}></Route>
  })
}

export default renderRoutesMap