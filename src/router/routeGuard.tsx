import React, { Component } from "react";
import Loadable from 'react-loadable';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import renderRoutesMap from "./routesMap";

const mapStateToProps = (state: any) => (state)
const mapDispatchToProps = (dispatch:any) => ({...dispatch})

class RouteGuard extends Component{
  
  constructor(props:any) {
    super(props)
  }

  componentWillUnmount() {
    let { history: { replace }, authorization, location } = this.props
    if (authorization) {
      replace('./')
    }
    if (location.pathname === '/') {
      replace('./abc')
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