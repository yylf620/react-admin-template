import React from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import renderRoutesMap from "./routesMap"

const renderRoutes = (routes: Array<any>, extraProps = {}, switchProps = {} ) => {
 const route = renderRoutesMap(routes)
 return (
    <BrowserRouter>
      <Switch {...switchProps}>
        { route }
      </Switch>
    </BrowserRouter>
  )
}

export default renderRoutes