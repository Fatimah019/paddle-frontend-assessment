import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFound from "../components/pages/notfound";
import LandingPage from "../components/pages/landing";
import GithubRepos from "../components/pages/githubmoststarred";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/homepage" />;
          }}
        />
        <Route exact path="/homepage" component={LandingPage} />
        <Route exact path="/github" component={GithubRepos} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
