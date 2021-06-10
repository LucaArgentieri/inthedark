import "./style/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../app/view/home";
import Select from "./view/select"
import ErrorPage from "../app/view/error";
import Scene from "../app/view/Scene";
import ScenaPunto from "../app/view/scenaPunto";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/select" component={Select} />
          <Route path="/stonehenge" component={Scene} />
          <Route path="/scena-punto" component={ScenaPunto} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
