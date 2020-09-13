import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LayoutDefault from './layouts/LayoutDefault';
import NotFound from './views/errors/not-found';

const AppNavigator = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/home" component={LayoutDefault} />
        <Route path="/users" component={LayoutDefault} />
        <Route path="/graph" component={LayoutDefault} />
        <Redirect from="/" exact to="/home" />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  </Router>
);
export default AppNavigator;
