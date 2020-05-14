import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/movie';
import Styles from './MovieItem.module.scss';

interface IOwnProps {
  movie: IMovie;
}

const MovieItem: React.FC<IOwnProps> = ({ movie }) => {
  const movieCover = movie.imageUrl ? movie.imageUrl : 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg';

  return (
    <div className={Styles.wrapper}>
      <Link className={Styles.link} to={`/movie/${movie.title}`}>
        <img className={Styles.cover} src={movieCover} alt={movie.title} />
        <span className={Styles.title}>{movie.title}</span>
      </Link>
    </div>
  );
};

export default MovieItem;
