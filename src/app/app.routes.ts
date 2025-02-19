import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FeaturedComponent } from './featured/featured.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    title: 'Home page',
  },
  {
    path: 'featured',
    component: FeaturedComponent,
    title: 'Featured movies',
  },
];
