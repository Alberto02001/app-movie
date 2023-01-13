import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenreMovieComponent } from './nav-pages/movie/genre-movie/genre-movie.component';
import { PopularMovieComponent } from './nav-pages/movie/popular-movie/popular-movie.component';
import { TopRatedMovieComponent } from './nav-pages/movie/top-rated-movie/top-rated-movie.component';
import { GenreTvComponent } from './nav-pages/tv/genre-tv/genre-tv.component';
import { PopularTvComponent } from './nav-pages/tv/popular-tv/popular-tv.component';
import { TopRatedTvComponent } from './nav-pages/tv/top-rated-tv/top-rated-tv.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'top-rated-movie', component: TopRatedMovieComponent
  },
  {
    path: 'popular-movie', component: PopularMovieComponent
  },
  {
    path: 'top-rated-tv', component: TopRatedTvComponent
  },
  {
    path: 'popular-tv', component: PopularTvComponent
  },
  {
    path: 'genres-movie', component: GenreMovieComponent
  },
  {
    path: 'genres-tv', component: GenreTvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
