import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PageNotFound from './pages/default';
import Live from './pages/live';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/live' component={Live}/>
      <Route component={PageNotFound}/>
    </Switch>
  </main>
)
export default Main;