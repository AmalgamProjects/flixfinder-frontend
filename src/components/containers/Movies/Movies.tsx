import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IMoviesState } from './reducers';
import { IRootState } from '../../../types/redux';
import { MovieItem } from '../../presentationals';
import { Container, Col, Row } from '..';
import { IFirebaseUser } from '../../../types/user';
import Styles from './Movies.module.css';

interface IOwnProps { }
interface IConnectedProps { state: IMoviesState; user: IFirebaseUser; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class Movies extends Component<Props> {
  componentDidMount() {
    const { onLoadData } = this.props;
    onLoadData();
  }

  render() {
    const { movies } = this.props.state;
    const { user } = this.props.user;

    return (
      <div className={Styles.wrapper}>
        {user && <div>logged in {user.displayName}</div>}
        {!user && <div>logged out</div>}
        <Container>
          <Row>
            {movies && movies.map(movie => <Col key={movie.id}><MovieItem movie={movie} /></Col>)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.MoviesReducer,
    user: state.UserReducer,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: () => dispatch(loadData()),
  }),
)(Movies);
