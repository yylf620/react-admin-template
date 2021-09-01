import LoadingOrError from "components/LoadingOrError";
import Nav from "components/nav";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { getToken } from "utils/auth";

/* export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        {Nav()}
        <Switch>
          <Route path="/:fruitName" component={Details} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
} */


class App extends React.Component{
  componentDidMount() {
    getToken()
  }
  render() {
    return  (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        {Nav()}
        {/* <Switch>
          <Route path="/:fruitName" component={Details} />
        </Switch> */}
      </Suspense>
    </BrowserRouter>
  );
  }
}

export default App