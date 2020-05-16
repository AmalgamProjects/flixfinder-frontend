import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IReviewsState } from './reducers';
import { IRootState } from '../../../types/redux';
import { ContentWithHeader, Review } from '../../presentationals';
import { IFetchMoreLikeThisParams } from '../../../api/moreLikeThis';
import Styles from './Reviews.module.scss';

interface IOwnProps {
  movieId: string;
}
interface IConnectedProps { state: IReviewsState; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class Reviews extends Component<Props> {
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
      <ContentWithHeader heading="Reviews">
        {results && results.map((review, index) => {
          const { rating, content, author } = review;

          return (
            <div key={index} className={Styles.review}>
              <Review
                rating={rating}
                content={content}
                author={author}
              />
            </div>
          );
        })}
      </ContentWithHeader>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.Reviews,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: (params: IFetchMoreLikeThisParams) => dispatch(loadData(params)),
  }),
)(Reviews);
