import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from '../components/home/Home';
import OneInfo from '../components/retrouso/OneSheetRetrouso';
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
        <Route exact path='/info/:id'>
          {/* <Route exact path='/info'> */}
          <OneSheetRetrouso />
        </Route>
      </Switch>
    </Container>
  );
}

export default Routes;
