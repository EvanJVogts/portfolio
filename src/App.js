import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing/Landing';
import Home from './Routes/Home/Home';
import Projects from './Routes/Projects/Projects';
import Contact from './Routes/Contact/Contact';
import Expanded from './Routes/Projects/Expanded';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path={'/'} component={Landing}/>
          <Route path={'/about'} component={Home}/>
          <Route path={'/projects'} component={Projects}/>
          <Route path={'/project/:projectId'} component={Expanded}/>
          <Route path={'/contact'} component={Contact}/>
        </Switch>
      </div>
    )
  }
}
