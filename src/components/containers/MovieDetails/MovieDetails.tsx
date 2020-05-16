import React, { Component, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData, clearStore } from './actions';
import { IMovieDetailsState } from './reducers';
import { IRootState } from '../../../types/redux';
import { IFirebaseUser } from '../../../types/user';
import { ContentWithHeader, Person, Review, YoutubeVideo, Spinner } from '../../presentationals';
import { Container, Row, Col, MovieItem, MovieHero } from '..';
import { addToWatchlist, markAsWatched } from '../../../redux/userData/actions';
import { IAddToWatchlistParams, IMarkAsWatchedParams } from '../../../api/userData';
import { IFetchMovieDetailsParams } from '../../../api/movies';
import { IUserDataState } from '../../../redux/userData/reducer';
import Styles from './MovieDetails.module.scss';

interface IOwnProps {
  movieId: string;
}

interface IConnectedProps { state: IMovieDetailsState; auth: IFirebaseUser; user: IUserDataState }
interface IConnectedDispatchProps {
  onLoadData: typeof loadData;
  onClearStore: typeof clearStore;
  onAddToWatchList: typeof addToWatchlist;
  onMarkAsWatched: typeof markAsWatched;
}
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps & RouteComponentProps;

class MovieDetails extends Component<Props> {
  componentDidMount() {
    const { onLoadData, movieId } = this.props;
    onLoadData({ id: movieId });
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.movieId !== prevProps.movieId) {
      this.props.onLoadData({ id: this.props.movieId });
    }
  }

  handleAddToWatchlist = () => {
    const { state, onAddToWatchList, auth } = this.props;
    if (auth && auth.user && state.movie) {
      onAddToWatchList({ title: state.movie.id, user: auth.user.uid });
    }
  };

  handleMarkAsWatched = () => {
    const { state, onMarkAsWatched, auth } = this.props;
    if (auth && auth.user && state.movie) {
      onMarkAsWatched({ title: state.movie.id, user: auth.user.uid });
    }
  };

  componentWillUnmount() {
    const { onClearStore } = this.props;

    onClearStore();
  }

  render() {
    const { state: { movie, isLoading }, user } = this.props;

    return (
      <Fragment>
        <div className={Styles.fullWidthMovie}>
          {isLoading && (
            <div className={Styles.loader}>
              <Spinner />
            </div>
          )}
          {movie && (
            <MovieHero
              isSingleMovie
              isAddToWatchlistLoading={user.isAddToWatchlistLoading}
              isMarkAsWatchedLoading={user.isMarkAsWatchedLoading}
              onAddToWatchlist={this.handleAddToWatchlist}
              onMarkAsWatched={this.handleMarkAsWatched}
              movie={movie}
            />
          )}
        </div>

        <div className={Styles.wrapper}>
          <Container>
            <div className={Styles.content}>

              <Row>
                <Col cols={movie && movie.youtube_url ? 2 : 1}>
                  {movie && movie.summary &&
                    <ContentWithHeader heading="Storyline">
                      <p className={Styles.text}>{movie?.summary}</p>
                    </ContentWithHeader>}
                </Col>
                {movie && movie.youtube_url &&
                  <Col cols={2}>
                    <ContentWithHeader heading="Movie Trailer">
                      <YoutubeVideo url={movie.youtube_url} />
                    </ContentWithHeader>
                  </Col>}
              </Row>

              <ContentWithHeader heading="Cast & Crew">
                <div className={Styles.cast}>
                  <Row>
                    <Col><Person image="https://via.placeholder.com/100" title="Tony Hawk" subtitle="Andrew Reynolds" /></Col>
                    <Col><Person image="https://via.placeholder.com/100" title="Tony Hawk" subtitle="Andrew Reynolds" /></Col>
                    <Col><Person image="https://via.placeholder.com/100" title="Tony Hawk" subtitle="Andrew Reynolds" /></Col>
                    <Col><Person image="https://via.placeholder.com/100" title="Tony Hawk" subtitle="Andrew Reynolds" /></Col>
                    <Col><Person image="https://via.placeholder.com/100" title="Tony Hawk" subtitle="Andrew Reynolds" /></Col>
                    <Col><Person image="https://via.placeholder.com/100" title="Tony Hawk" subtitle="Andrew Reynolds" /></Col>
                  </Row>
                </div>
              </ContentWithHeader>

              <ContentWithHeader heading="Reviews">
                <div className={Styles.review}>
                  <Review
                    rating="8.9/10"
                    review="Cinematography - great, acting - great. Music- reused already written works. Plot - none. Just almost 3+ hours worth of some random scenes stiched together without leading anywhere. Watched it twice. Has not changed my opinion. By the time it ended I did not care anymore, I just wanted to pee!!! After sitting there for almost 3 hours. What was the point of this movie? Still wondering. One of the Tarantino's worst (if not worst!)."
                    user="carlvan1977 - 27 July 2019"
                  />
                </div>
                <div className={Styles.review}>
                  <Review
                    rating="8.9/10"
                    review="The first 2 hours is only for lovers of everything late 60s retro, great cinematography and outstanding acting. The last 45 minutes fasten your seatbelts because classic Tarantino kicks in."
                    user="carlvan1977 - 27 July 2019"
                  />
                </div>
              </ContentWithHeader>

              <ContentWithHeader heading="More Like This">
                <Row>
                  <Col><MovieItem movie={undefined} /></Col>
                  <Col><MovieItem movie={undefined} /></Col>
                  <Col><MovieItem movie={undefined} /></Col>
                  <Col><MovieItem movie={undefined} /></Col>
                  <Col><MovieItem movie={undefined} /></Col>
                  <Col><MovieItem movie={undefined} /></Col>
                </Row>
              </ContentWithHeader>

            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.MovieDetailsReducer,
    user: state.UserData,
    auth: state.Auth,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: (params: IFetchMovieDetailsParams) => dispatch(loadData(params)),
    onClearStore: () => dispatch(clearStore()),
    onAddToWatchList: (params: IAddToWatchlistParams) => dispatch(addToWatchlist(params)),
    onMarkAsWatched: (params: IMarkAsWatchedParams) => dispatch(markAsWatched(params)),
  }),
)(withRouter(MovieDetails));
