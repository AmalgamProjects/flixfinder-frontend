import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Layout, MovieDetails } from '../../containers';
import { FullWidthMovie } from '../../presentationals';
import Styles from './Movie.module.scss';
import movieTestBackground from '../../../assets/images//movie-background-test.jpg';

interface IOwnProps { }

class Movie extends React.Component<IOwnProps & RouteComponentProps<{ id: string }>> {
  render() {
    const { match } = this.props;
    const { params } = match;

    return (
      <Layout>
        <div className={Styles.wrapper}>
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
        <MovieDetails movieId={params.id} />
      </Layout>
    );
  }
}

export default withRouter(Movie);
