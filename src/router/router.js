import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import OneSheetRetrouso from '../components/retrouso/OneSheetRetrouso';
import Retrouso from '../components/retrouso/Retrouso';
import './router.css';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/retrouso'>
        <Retrouso />
      </Route>
      <Route exact path='/invernia'>
        <Retrouso />
      </Route>
      <Route exact path='/partituras/:id'>
        <OneSheetRetrouso />
      </Route>
    </Switch>
  );
}

export default Routes;
