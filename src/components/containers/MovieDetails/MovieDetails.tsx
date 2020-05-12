import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IMovieDetailsState } from './reducers';
import { IRootState } from '../../../types/redux';
import { IFirebaseUser } from '../../../types/user';

interface IOwnProps {
  movieId: string;
}
interface IConnectedProps { state: IMovieDetailsState; user: IFirebaseUser; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class MovieDetails extends Component<Props> {
  componentDidMount() {
    const { movieId, onLoadData } = this.props;
    onLoadData({ id: movieId });
  }

  render() {
    const { movie } = this.props.state;

    return (
        <div>
          {movie && movie.title}
        </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.MovieDetailsReducer,
    user: state.UserReducer,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: params => dispatch(loadData(params)),
  }),
)(MovieDetails);
