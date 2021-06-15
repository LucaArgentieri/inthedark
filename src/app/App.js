import "./style/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../app/view/home";
import Select from "./view/select";
import ErrorPage from "../app/view/error";
import Experience from "../app/view/Experience";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/experience" exact component={Select} />
          <Route path="/experience/:id" component={Experience} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
