import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, Login, Onboarding, MyProfile, Watchlist, Movie, NotFountRoute } from '../components/pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/onboarding" exact component={Onboarding} />
    <Route path="/profile" exact component={MyProfile} />
    <Route path="/watchlist" exact component={Watchlist} />
    <Route path="/movie/:id" component={Movie} />
    <Route component={NotFountRoute} />
  </Switch>
);

export default Routes;
