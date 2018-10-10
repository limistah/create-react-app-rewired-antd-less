import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './Home';
import Dashboard from './Dashboard';
import DocsHome from './Docs'

class RootContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(props) {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/docs" component={DocsHome}/>
        </Switch>
      </Router>
    );
  }
}

export default RootContainer;
