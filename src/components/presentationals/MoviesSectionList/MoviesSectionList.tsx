import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/movie';
import { Container, Row, Col } from '../../containers';
import { MovieItem, Heading } from '..';
import Styles from './MoviesSectionList.module.scss';

interface IOwnProps {
  path?: string;
  title: string;
  movies: IMovie[];
}

const MoviesSectionList: React.FC<IOwnProps> = ({ title, movies, path }) => (
  <div className={Styles.wrapper}>
    <Container>
      <div className={Styles.heading}>
        <Heading title={title} />
        {path && (
          <Link className={Styles.link} to={path}>See all</Link>
        )}
      </div>
    </Container>
    <Container>
      <Row>
        {movies && movies.map(movie => (
          <Col key={movie.id}>
            <MovieItem movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default MoviesSectionList;
