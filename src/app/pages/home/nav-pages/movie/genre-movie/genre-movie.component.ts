import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.scss']
})
export class GenreMovieComponent implements OnInit{

  data : any = []

  id : string = ""

  genreName : string = ""

  movies : any = []

  currentPage : number = 1

  constructor(
    private route: ActivatedRoute,
    private http : HttpService,
    private getId: GetIDService,
    private router: Router,
    public spinnerService : SpinnerService
  ){
    router.events.forEach((event) => {
      this.route.queryParamMap
      .subscribe((params) => {
        this.data = {...params};
        this.id = this.data.params.id
      });

      this.currentPage = 1

      this.http.getMovieGenres(this.id, this.currentPage).subscribe((data: any) => {
        this.movies = data.results
      },
      (error) => { console.log(error) });
      this.setName()
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((params) => {
      this.data = {...params};
      this.id = this.data.params.id
    });

    this.currentPage = 1

    this.http.getMovieGenres(this.id, this.currentPage).subscribe((data: any) => {
      this.movies = data.results
    },
    (error) => { console.log(error) });

    this.setName()
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

  
  nextPage(){
    if(this.currentPage !== 50){
      this.currentPage++ 
      this.http.getMovieGenres(this.id, this.currentPage).subscribe((data: any) => {
        this.movies = data.results
      },
      (error) => { console.log(error) });
      window.scroll({ 
        top: 0, 
        left: 0, 
      });
    }
  }

  prevPage(){
    if(this.currentPage !== 1){
      this.currentPage-- 
      this.http.getMovieGenres(this.id, this.currentPage).subscribe((data: any) => {
        this.movies = data.results
      },
      (error) => { console.log(error) });
      window.scroll({ 
        top: 0, 
        left: 0, 
      });
    }
  }

  setName(){
    if(this.id === "28")
    this.genreName = "Action"
    if(this.id === "12")
    this.genreName = "Adventure"
    if(this.id === "16")
    this.genreName = "Animation"
    if(this.id === "35")
    this.genreName = "Comedy"
    if(this.id === "80")
    this.genreName = "Crime"
    if(this.id === "99")
    this.genreName = "Documentary"
    if(this.id === "18")
    this.genreName = "Drama"
    if(this.id === "10751")
    this.genreName = "Family"
    if(this.id === "14")
    this.genreName = "Fantasy"
    if(this.id === "27")
    this.genreName = "Horror"
    if(this.id === "10402")
    this.genreName = "Music"
    if(this.id === "10749")
    this.genreName = "Romance"
    if(this.id === "53")
    this.genreName = "Thriller"
    if(this.id === "10752")
    this.genreName = "War"
    if(this.id === "37")
    this.genreName = "Western"
  }

}