import "./style/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../app/view/home";
import Select from "./view/select";
import ErrorPage from "../app/view/error";
import Experience from "../app/view/Experience";
import Cursor from "../app/components/cursor";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/experience" exact component={Select} />
          <Route path="/experience/:id" component={Experience} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Cursor />
      </Router>
    </>
  );
}

export default App;
