import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieFull } from '../movie-full';
import { MovieShort } from '../movie-short';
import { MovieComponent } from '../movie/movie.component';
import { MovieAPIService } from '../movie-api.service';
import { MovieSearchResult } from '../movieSearchResult';

@Component({
  selector: 'app-search',
  imports: [CommonModule, MovieComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  movieAPIService: MovieAPIService = inject(MovieAPIService);
  movieFullList: MovieFull[] = [];
  searchValue: string;
  notFound: boolean = false;

  constructor() {}

  getFiveSearchedMovies(searchValue: string) {
    this.movieFullList = [];
    this.movieAPIService
      .getSearchedMovies(searchValue)
      .then((movieSearchResult: MovieSearchResult) => {
        try {
          if (movieSearchResult.Response !== 'True') {
            throw new Error('Response is false'); // Is this really the best way to handle a false or unexpected response? Feel like this might have sec implications although it doesn't display the error message in console
          }
          movieSearchResult.Search.slice(0, 5).forEach((movie: MovieShort) => {
            this.movieAPIService
              .getMovieById(movie.imdbID)
              .then((movieFull: MovieFull) => {
                movieFull = this.movieAPIService.createLists(movieFull);
                this.movieFullList.push(movieFull);
              });
          });
        } catch (error: any) {
          console.error('Error:', error);
          this.notFound = true;
        }
      });
  }
}
