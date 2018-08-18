import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'containers/Home';
import AllRoutesMap from 'containers/AllRoutesMap';
import Trail from 'containers/Trail';

import './App.css';

const App = () =>
  <div className="App">
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trail/:trail" component={Trail} />
        <Route exact path="/map" component={AllRoutesMap} />
      </Switch>
    </Router>
  </div>;

export default App;
