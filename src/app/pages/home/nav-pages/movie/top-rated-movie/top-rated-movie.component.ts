import { Component, OnInit } from '@angular/core';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-top-rated-movie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.scss']
})
export class TopRatedMovieComponent implements OnInit{

  currentPage : number = 1

  movies : any = []

  constructor(
    private http : HttpService,
    private getId: GetIDService,
    public spinnerService : SpinnerService
  ){}

  ngOnInit(): void {
    this.currentPage = 1
    this.http.getTopRatedMovie(this.currentPage).subscribe((data: any) => {
      this.movies = data.results
    },
    (error) => { console.log(error) });
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

  nextPage(){
    if(this.currentPage !== 20){
      this.currentPage++ 
      this.http.getTopRatedMovie(this.currentPage).subscribe((data: any) => {
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
      this.http.getTopRatedMovie(this.currentPage).subscribe((data: any) => {
        this.movies = data.results
      },
      (error) => { console.log(error) });
      window.scroll({ 
        top: 0, 
        left: 0, 
      });
    }
  }

}