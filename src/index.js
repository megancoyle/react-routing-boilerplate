import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';

render(
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>,
    document.getElementById('container')
  );
