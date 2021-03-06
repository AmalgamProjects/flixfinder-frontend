import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Dashboard,
  Login,
  Search,
  MyProfile,
  Watchlist,
  Movie,
  NotFountRoute,
  RecommendedMovies,
  RecommendedTvShows,
} from '../components/pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/reccomended-movies" exact component={RecommendedMovies} />
    <Route path="/reccomended-tv-shows" exact component={RecommendedTvShows} />
    <Route path="/profile" exact component={MyProfile} />
    <Route path="/watchlist" exact component={Watchlist} />
    <Route path="/search/:term/:titleType" exact component={Search} />
    <Route path="/movie/:id" component={Movie} />
    <Route component={NotFountRoute} />
  </Switch>
);

export default Routes;
