import React, { Component, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData, clearStore } from './actions';
import { IMovieDetailsState } from './reducers';
import { IRootState } from '../../../types/redux';
import { IFirebaseUser } from '../../../types/user';
import { ContentWithHeader, Person, YoutubeVideo, Spinner } from '../../presentationals';
import { Container, Row, Col, Reviews, MovieHero, MoreLikeThis } from '..';
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
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps & RouteComponentProps<{ id: string }>;

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
    const { match } = this.props;
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

              {movie && movie.principals && movie.principals.length > 0 && <ContentWithHeader heading="Cast & Crew">
                <div className={Styles.cast}>
                  <Row>
                    {movie && movie.principals.map((principal) =>
                      <Col key={principal.primaryName}>
                        <Person image={principal.image_url} title={principal.primaryName} subtitle={principal.characters} />
                      </Col>
                    )}
                  </Row>
                </div>
              </ContentWithHeader>}

              <Reviews movieId={match.params.id} />

              <MoreLikeThis movieId={match.params.id} />

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
