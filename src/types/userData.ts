import { IMovie } from './movie';

export interface IUserData {
  email: string;
  username: string; // this is firebase uid
  url: string;
  favourites: IMovie[];
  seen: IMovie[];
  watch: IMovie[];
}
