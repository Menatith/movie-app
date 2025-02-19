import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAPIService } from '../movie-api.service';
import { MovieFull } from '../movie-full';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-featured',
  imports: [MovieComponent, CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css',
})
export class FeaturedComponent implements OnInit {
  movieAPIService: MovieAPIService = inject(MovieAPIService);
  movieList: MovieFull[] = [];

  ngOnInit() {
    // Should cache/local storage the retrieved data probably
    this.movieAPIService
      .getMovieById('tt0111161')
      .then((movieFull: MovieFull) => {
        movieFull = this.movieAPIService.createLists(movieFull);
        this.movieList.push(movieFull);
      });
    this.movieAPIService
      .getMovieById('tt0068646')
      .then((movieFull: MovieFull) => {
        movieFull = this.movieAPIService.createLists(movieFull);
        this.movieList.push(movieFull);
      });
  }
}
