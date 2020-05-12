import * as React from 'react';
import { IMovie } from '../../../types/movie';
import Styles from './MovieItem.module.css';

interface IOwnProps {
  movie: IMovie;
}

const MovieItem: React.FC<IOwnProps> = ({ movie }) => (
  <div className={Styles.wrapper}>
    <img className={Styles.cover} src={movie.imageUrl} alt={movie.title} />
    {movie.title}
  </div>
);

export default MovieItem;
