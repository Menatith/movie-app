import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { MovieFull } from './movie-full';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  constructor() {}

  async getSearchedMovies(searchValue: string): Promise<any> {
    // Promise<any> to allow for errors to be caught
    try {
      const response = await fetch(`${environment.apiUrl}&s=${searchValue}`);
      if (!response.ok) {
        throw new Error(
          `Unable to Fetch Data, Status: ${response.status}, ${response.statusText}`
        );
      }
      return (await response.json()) ?? {};
    } catch (error: any) {
      console.error('Error:', error);
    }
  }

  async getMovieById(id: string): Promise<any> {
    try {
      const response = await fetch(`${environment.apiUrl}&i=${id}`);
      if (!response.ok) {
        throw new Error(
          `Unable to Fetch Data, Status: ${response.status}, ${response.statusText}`
        );
      }
      return (await response.json()) ?? {};
    } catch (error: any) {
      console.error('Error:', error);
    }
  }

  createLists(movie: MovieFull): MovieFull {
    movie.ActorsList = movie.Actors.split(', ');
    movie.WriterList = movie.Writer.split(', ');
    movie.GenreList = movie.Genre.split(', ');

    return movie;
  }
}
