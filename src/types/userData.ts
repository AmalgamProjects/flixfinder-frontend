import { IMovie } from './movie';

export interface IUserData {
  email: string;
  username: string; // this is firebase uid
  url: string;
  favourites: IMovie[];
  seen: IMovie[];
  watch: IMovie[];
  recommended: IMovie[];
  // eslint-disable-next-line camelcase
  recommended_movies: IMovie[];
  // eslint-disable-next-line camelcase
  recommended_tv: IMovie[];
}
