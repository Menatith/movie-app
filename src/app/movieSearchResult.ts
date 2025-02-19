import { MovieShort } from './movie-short';

export interface MovieSearchResult {
  Search: Array<MovieShort>;
  Response: string;
  totalResults: string;
}
