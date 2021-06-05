import "./style/app.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from '../app/view/home'
import ErrorPage from '../app/view/error'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
