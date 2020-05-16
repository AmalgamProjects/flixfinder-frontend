import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from '../../../redux/userData/actions';
import { IRootState } from '../../../types/redux';
import { IUserDataState } from '../../../redux/userData/reducer';
import { Slider, Layout } from '../../containers';
import { MoviesSectionList } from '../../presentationals';

interface IOwnProps {}
interface IConnectedProps { state: IUserDataState; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class Dashboard extends Component<Props> {
  componentDidMount() {
    const { onLoadData } = this.props;
    onLoadData();
  }

  render() {
    const { recommended, recommended_movies, recommended_tv, isLoading } = this.props.state;
    const movies = recommended_movies.slice(10, 16);
    const tvShows = recommended_tv.slice(0, 6);
    const picks = recommended.filter(movie => movie.priority < 4).slice(0, 5);

    console.log('isLoading home page', isLoading);

    return (
      <Layout>
        <Slider picks={picks} />
        <MoviesSectionList movies={movies} title="Recommended Movies" path="/reccomended-movies" />
        <MoviesSectionList movies={tvShows} title="Recommended TV Shows" path="/reccomended-tv-shows" />
      </Layout>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.UserData,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: () => dispatch(loadData()),
  }),
)(Dashboard);
