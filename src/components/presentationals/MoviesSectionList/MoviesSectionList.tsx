import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/movie';
import { Container, Row, Col, MovieItem } from '../../containers';
import { Heading } from '..';
import Styles from './MoviesSectionList.module.scss';

interface IOwnProps {
  path?: string;
  title: string;
  isWatchlist?: boolean;
  isAlreadyWachedList?: boolean;
  movies: IMovie[];
}

const MoviesSectionList: React.FC<IOwnProps> = ({ title, movies, path, isWatchlist, isAlreadyWachedList }) => (
  <div className={Styles.wrapper}>
    <Container>
      <div className={Styles.heading}>
        <Heading title={title} size="small" />
        {path && (
          <Link className={Styles.link} to={path}>See all</Link>
        )}
      </div>
    </Container>
    <Container>
      <Row>
        {movies && movies.map(movie => (
          <Col key={movie.title}>
            <MovieItem movie={movie} isAddToWatchlistVisible={!isWatchlist && !isAlreadyWachedList} isMarkAsWatchedVisible={!isAlreadyWachedList} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default MoviesSectionList;
