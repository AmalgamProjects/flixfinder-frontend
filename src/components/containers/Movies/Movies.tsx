import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IMoviesState } from './reducers';
import { IRootState } from '../../../types/redux';
import { MovieItem } from '../../presentationals';
import { Container, Col, Row } from '..';

interface IOwnProps {}
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
      <div>
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
  }),
  (dispatch: Dispatch) => ({
    onLoadData: () => dispatch(loadData()),
  }),
)(Movies);
