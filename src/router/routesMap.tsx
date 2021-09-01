import React from "react"
import { Route } from "react-router-dom"
import RouteGuard from "./routeGuard"
const renderRoutesMap = (routes: Array<any>) => {
  return routes.map((route: any, index: any) => {
      <Route key={index} path={route.path} render={props => (
        <RouteGuard {...route} { ...props }></RouteGuard>
      )}></Route>
  })
}

export default renderRoutesMap