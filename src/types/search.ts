import { IMovie } from './movie';

export interface ISearchResponse {
  count: number;
  results: IMovie[];
}
