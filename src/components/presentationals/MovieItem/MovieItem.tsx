import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/movie';
import Styles from './MovieItem.module.css';

interface IOwnProps {
  movie: IMovie;
}

const MovieItem: React.FC<IOwnProps> = ({ movie }) => (
  <div className={Styles.wrapper}>
    <Link to={`/movie/${movie.id}`}>
      <img className={Styles.cover} src={movie.imageUrl} alt={movie.title} />
      {movie.title}
    </Link>
  </div>
);

export default MovieItem;
