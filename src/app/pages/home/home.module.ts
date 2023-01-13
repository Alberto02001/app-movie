import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { PopularMovieComponent } from './nav-pages/movie/popular-movie/popular-movie.component';
import { TopRatedMovieComponent } from './nav-pages/movie/top-rated-movie/top-rated-movie.component';
import { GenreMovieComponent } from './nav-pages/movie/genre-movie/genre-movie.component';
import { TopRatedTvComponent } from './nav-pages/tv/top-rated-tv/top-rated-tv.component';
import { PopularTvComponent } from './nav-pages/tv/popular-tv/popular-tv.component';
import { GenreTvComponent } from './nav-pages/tv/genre-tv/genre-tv.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroHomeComponent,
    HomeContentComponent,
    PopularMovieComponent,
    TopRatedMovieComponent,
    GenreMovieComponent,
    TopRatedTvComponent,
    PopularTvComponent,
    GenreTvComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
