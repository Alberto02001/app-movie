import { Component, OnInit } from '@angular/core';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-top-rated-movie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.scss']
})
export class TopRatedMovieComponent implements OnInit{

  movies : any = []

  constructor(
    private http : HttpService,
    private getId: GetIDService 
  ){}

  ngOnInit(): void {
    this.http.getTopRatedMovie().subscribe((data: any) => {
      this.movies = data.results
    },
    (error) => { console.log(error) });
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

}