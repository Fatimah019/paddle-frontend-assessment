import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import NotFound from "../components/notfound";
import LandingPage from "../components/pages/landing";
import GithubRepos from "../components/pages/githubmoststarred";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/github" component={GithubRepos} />
          <Redirect exact from="/" to="/homepage" />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
