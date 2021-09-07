import { IRoute } from "entitys/route";
import React, { Component } from "react";
import Loadable from 'react-loadable';
import { connect } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import renderRoutesMap from "./routesMap";

const mapStateToProps = (state: any) => (state)
const mapDispatchToProps = (dispatch:any) => ({...dispatch})
const history = useHistory()
const location = useLocation()

class RouteGuard extends Component<IRoute>{
  
  constructor(props:any) {
    super(props)
  }

  componentWillUnmount() {
    let { authorization } = this.props
    if (authorization) {
      history.replace('./')
    }
    if (location.pathname === '/') {
      history.replace('./abc')
    }
  }

  render() {
    let { component, routes = [] } = this.props
    const LoadableComponent = Loadable({
      loader: () => import(`../${component}`),
      loading: () => (
        <span>111</span>
      )
    })
    return (<div>
      <LoadableComponent {...this.props}></LoadableComponent>
      { renderRoutesMap(routes) }
    </div>)  
  }
}

export default (withRouter(connect(mapStateToProps, mapDispatchToProps)))(RouteGuard)