import * as React from 'react';
import { IMovie } from '../../../types/movie';

interface IOwnProps {
  movie: IMovie;
}

const MovieItem: React.FC<IOwnProps> = ({ movie }) => (
<div>{movie.title}</div>
);

export default MovieItem;
