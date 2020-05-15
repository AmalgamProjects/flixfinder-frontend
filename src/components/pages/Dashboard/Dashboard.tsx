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
    const { recommended } = this.props.state;
    const movies = recommended.slice(0, 6);

    return (
      <Layout>
        <Slider />
        <MoviesSectionList movies={movies} title="Recommended Movies" path="/reccomended-movies" />
        <MoviesSectionList movies={movies} title="Recommended TV Shows" path="/reccomended-tv-shows" />
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
