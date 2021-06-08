import "./style/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../app/view/home";
import ErrorPage from "../app/view/error";
import Scene from "../app/view/Scene";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/stonehenge" component={Scene} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
