import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(
    private route: ActivatedRoute,
    private http : HttpService,
    private getId: GetIDService,
    private router: Router
  ){
    router.events.forEach((event) => {
      this.route.queryParamMap
      .subscribe((params) => {
        this.data = {...params};
        this.id = this.data.params.id
      });
      this.http.getMovieGenres(this.id, 1).subscribe((data: any) => {
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
    this.http.getMovieGenres(this.id, 1).subscribe((data: any) => {
      this.movies = data.results
    },
    (error) => { console.log(error) });
    this.setName()
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

  setName(){
    if(this.id === "28")
    this.genreName = "Action"
    if(this.id === "10749")
    this.genreName = "Love"
  }

}