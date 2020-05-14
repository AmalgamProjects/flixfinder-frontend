import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { IMovieDetailsState } from './reducers';
import { IRootState } from '../../../types/redux';
import { IFirebaseUser } from '../../../types/user';
import { ContentWithHeader, Person, Review, FullWidthMovie, MovieItem } from '../../presentationals';
import Styles from './MovieDetails.module.scss';
import movieTestBackground from '../../../assets/images//movie-background-test.jpg';
import { Container, Row, Col } from '..';

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

  componentDidUpdate(prevProps: Props) {
    if (this.props.movieId !== prevProps.movieId) {
      this.props.onLoadData({ id: this.props.movieId });
    }
  }
  render() {
    // const { movie } = this.props.state;

    return (
      <Fragment>
        <div className={Styles.fullWidthMovie}>
          <FullWidthMovie
            isSingleMovie
            title="Once Upon a Time... in Hollywood"
            background={movieTestBackground}
            details="R | 2h 41min | Comedy, Drama | 26 July 2019 (USA)"
            director="Quentin Tarantino"
            writer="Quentin Tarantino"
            starring="Leonardo DiCaprio, Brad Pitt, Margot Robbie"
          />
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
                  <Col><MovieItem movie={{ id: '1', user: '1', title: 'Awesome movie (1)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' }} /></Col>
                  <Col><MovieItem movie={{ id: '1', user: '2', title: 'Awesome movie (2)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' }} /></Col>
                  <Col><MovieItem movie={{ id: '1', user: '3', title: 'Awesome movie (3)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' }} /></Col>
                  <Col><MovieItem movie={{ id: '1', user: '4', title: 'Awesome movie (4)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' }} /></Col>
                  <Col><MovieItem movie={{ id: '1', user: '5', title: 'Awesome movie (5)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' }} /></Col>
                  <Col><MovieItem movie={{ id: '1', user: '6', title: 'Awesome movie (6)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' }} /></Col>
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
)(MovieDetails);
