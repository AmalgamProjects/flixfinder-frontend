import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Dashboard, Login, Onboarding, MyProfile, Watchlist, Movie } from '../components/pages';

const Routes = () => (
  <Fragment>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/onboarding" exact component={Onboarding} />
    <Route path="/profile" exact component={MyProfile} />
    <Route path="/watchlist" exact component={Watchlist} />
    <Route path="/movie/:id" component={Movie} />
  </Fragment>
);

export default Routes;
