import { TestBed } from '@angular/core/testing';

import { MovieAPIService } from './movie-api.service';

describe('MoviesService', () => {
  let service: MovieAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
