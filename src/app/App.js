//import "./style/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../app/view/home";
import Select from "./view/select";
import ErrorPage from "../app/view/error";
import Experience from "../app/view/Experience";

import Intro from "../app/view/Intro";

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/select" component={Select} />
          <Route path="/experience" component={Experience} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router> */}

      <Intro />
    </>
  );
}

export default App;
