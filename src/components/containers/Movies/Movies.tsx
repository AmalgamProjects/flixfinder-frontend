import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IMoviesState } from './reducers';
import { IRootState } from '../../../types/redux';
import { MoviesSectionList } from '../../presentationals';
import Styles from './Movies.module.scss';

interface IOwnProps { }
interface IConnectedProps { state: IMoviesState; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class Movies extends Component<Props> {
  componentDidMount() {
    const { onLoadData } = this.props;
    onLoadData();
  }

  render() {
    const { movies } = this.props.state;

    return (
      <div className={Styles.wrapper}>
        <MoviesSectionList movies={movies} title="Recommended Movies" path="/reccomended-movies" />
        <MoviesSectionList movies={movies} title="Recommended TV Shows" path="/reccomended-tv-shows" />
      </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.MoviesReducer,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: () => dispatch(loadData()),
  }),
)(Movies);
