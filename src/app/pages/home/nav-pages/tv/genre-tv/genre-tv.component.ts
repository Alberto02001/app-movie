import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-genre-tv',
  templateUrl: './genre-tv.component.html',
  styleUrls: ['./genre-tv.component.scss']
})
export class GenreTvComponent implements OnInit{

  data : any = []

  id : string = ""

  genreName : string = ""

  tv : any = []

  currentPage : number = 1

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

      this.currentPage = 1
      
      this.http.getTVGenres(this.id, 1).subscribe((data: any) => {
        this.tv = data.results
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

    this.http.getTVGenres(this.id, 1).subscribe((data: any) => {
      this.tv = data.results
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
      this.http.getTVGenres(this.id, this.currentPage).subscribe((data: any) => {
        this.tv = data.results
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
      this.http.getTVGenres(this.id, this.currentPage).subscribe((data: any) => {
        this.tv = data.results
      },
      (error) => { console.log(error) });
      window.scroll({ 
        top: 0, 
        left: 0, 
      });
    }
  }


  setName(){
    if(this.id === "10759")
    this.genreName = "Action & Adventure"
    if(this.id === "10762")
    this.genreName = "Kids"
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
    if(this.id === "10765")
    this.genreName = "Sci-Fi & Fantasy"
    if(this.id === "10764")
    this.genreName = "Reality"
    if(this.id === "10766")
    this.genreName = "Soap"
    if(this.id === "10749")
    this.genreName = "Romance"
    if(this.id === "9648")
    this.genreName = "Mistery"
    if(this.id === "10768")
    this.genreName = "War & Politics"
    if(this.id === "37")
    this.genreName = "Western"
  }

}