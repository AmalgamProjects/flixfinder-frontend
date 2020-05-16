import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from '../../../redux/userData/actions';
import { IRootState } from '../../../types/redux';
import { MoviesSectionList } from '../../presentationals';
import { IUserDataState } from '../../../redux/userData/reducer';
import { Layout } from '../../containers';

interface IOwnProps {}
interface IConnectedProps { state: IUserDataState; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class RecommendedMovies extends Component<Props> {
  componentDidMount() {
    const { onLoadData } = this.props;
    onLoadData();
  }

  render() {
    const { recommended_movies } = this.props.state;

    return (
      <Layout>
        {/* eslint-disable-next-line camelcase */}
        <MoviesSectionList movies={recommended_movies} title="Recommended Movies" />
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
)(RecommendedMovies);
