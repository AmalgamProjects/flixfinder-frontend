import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IMoreLikeThisState } from './reducers';
import { IRootState } from '../../../types/redux';
import { ContentWithHeader } from '../../presentationals';
import { Row, Col, MovieItem } from '..';
import { IFetchMoreLikeThisParams } from '../../../api/moreLikeThis';

interface IOwnProps {
  movieId: string;
}
interface IConnectedProps { state: IMoreLikeThisState; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class MoreLikeThis extends Component<Props> {
  componentDidMount() {
    const { onLoadData, movieId } = this.props;
    onLoadData({ id: movieId });
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.movieId !== prevProps.movieId) {
      this.props.onLoadData({ id: this.props.movieId });
    }
  }

  render() {
    const { results } = this.props.state;

    if (!results || results.length === 0) {
      return null;
    }

    return (
      <ContentWithHeader heading="More Like This">
        <Row>
          {results && results.map(movie => <Col><MovieItem movie={movie} /></Col>)}
        </Row>
      </ContentWithHeader>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.MoreLikeThis,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: (params: IFetchMoreLikeThisParams) => dispatch(loadData(params)),
  }),
)(MoreLikeThis);
