import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from '../components/home/Home';
import OneSheetRetrouso from '../components/retrouso/OneSheetRetrouso';
import Retrouso from '../components/retrouso/Retrouso';
import './router.css';
function Routes() {
  return (
    <Container>
      <Switch>
        <Route exact path='/'>
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
    </Container>
  );
}

export default Routes;
