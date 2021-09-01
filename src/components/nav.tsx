import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

function _import(path:string) {
  return lazy(() => import(`../${path}.tsx`));
}

/** 动态生成路由  */
function generateRoutes() { 
  /* const {data, isLoading, isError} = useQuery('userData', () => getLoginInfo()); 
  if (isError) {
    return <div></div>;
  }
  const menus = data.menus[0].menus */
  const menus = [{closable: true,
                  enabled: true,
                  external: true,
                  hidden: false,
                  icon: null,
                  id: 7,
                  label: "用户管理",
                  newWindow: false,
                  opened: false,
                  parentId: 2,
                  path: "/user",
    viewPath: "/admin/user"
  }]
  const routes = menus.map((item: any) =>
    <Route exact path="/" component={_import('views' + item.viewPath)} key={ item.id }/>
  );
  return ( 
    <Switch>
      {routes}
    </Switch>
  ) 
}
export default function Nav() {
  return (
    <div>
      {generateRoutes()}
    </div>
  );
}
