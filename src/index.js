import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Menu}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About}/>
    </Route>
  </Router>,
    document.getElementById('container')
  );
