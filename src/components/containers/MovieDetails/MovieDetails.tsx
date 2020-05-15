import React, { Component, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IMovieDetailsState } from './reducers';
import { IRootState } from '../../../types/redux';
import { IFirebaseUser } from '../../../types/user';
import { ContentWithHeader, Person, Review, FullWidthMovie } from '../../presentationals';
import Styles from './MovieDetails.module.scss';
import movieTestBackground from '../../../assets/images//movie-background-test.jpg';
import { Container, Row, Col, MovieItem } from '..';

interface IOwnProps {
  movieId: string;
}

interface IConnectedProps { state: IMovieDetailsState; user: IFirebaseUser; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
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

  render() {
    const { state: { movie, isLoading } } = this.props;

    return (
      <Fragment>
        {isLoading && <span>loading...</span>}
        <div className={Styles.fullWidthMovie}>
          {movie && (
            <FullWidthMovie
              isSingleMovie
              title={movie.primaryTitle}
              background={movieTestBackground}
              details="R | 2h 41min | Comedy, Drama | 26 July 2019 (USA)"
              director="Quentin Tarantino"
              writer="Quentin Tarantino"
              starring="Leonardo DiCaprio, Brad Pitt, Margot Robbie"
            />
          )}
        </div>

        <div className={Styles.wrapper}>
          <Container>
            <div className={Styles.content}>

              <ContentWithHeader heading="Storyline">
                <p className={Styles.text}>
                  Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles, where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood's golden age.
                </p>
              </ContentWithHeader>

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
    user: state.Auth,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: params => dispatch(loadData(params)),
  }),
)(withRouter(MovieDetails));
