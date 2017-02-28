import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import ProfileDetail from './components/Profile';

const data = [
  {
    id: 1,
    name: 'John Smith',
    age: '50',
    hobbies: 'Fishing and hiking'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: '60',
    hobbies: 'Sports'
  },
  {
    id: 3,
    name: 'Timmy Smith',
    age: '12',
    hobbies: 'Painting'
  },
  {
    id: 4,
    name: 'Laura Smith',
    age: '10',
    hobbies: 'Running'
  }
];


render(
  <Router history={browserHistory}>
    <Route path="/" component={Menu}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} data={data}/>
        <Route path="/profiles/:id" component={ProfileDetail} data={data}/>
    </Route>
  </Router>,
    document.getElementById('container')
  );
