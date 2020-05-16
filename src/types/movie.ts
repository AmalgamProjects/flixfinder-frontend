export interface IMovie {
  id: string;
  title: string;
  priority: number;
  user: string; // this is firebase uid
  // eslint-disable-next-line camelcase
  image_url: string | null;
  // eslint-disable-next-line camelcase
  poster_url: string | null;
  averageRating: string;
  directors: any[];
  endYear: string;
  genres: string[];
  moviedb: any[];
  primaryTitle: string;
  principals: any[];
  rapid: any[];
  runtimeMinutes: string;
  startYear: string;
  titleType: string;
  summary: string | null;
  // eslint-disable-next-line camelcase
  backdrop_url: string | null;
  numVotes: number;
  tastedb: any[];
  // eslint-disable-next-line camelcase
  wikipedia_url: string | null;
  writers: any[];
  // eslint-disable-next-line camelcase
  youtube_url: string | null;
}
