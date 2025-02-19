import { Component, Input } from '@angular/core';
import { MovieFull } from '../movie-full';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input() movieFull!: MovieFull;
}
