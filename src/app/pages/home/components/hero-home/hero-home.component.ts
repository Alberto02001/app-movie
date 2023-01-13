import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit{

  nowMovie : any[] = []

  trendingTv : any[] = []

  constructor(
      private http : HttpService, 
      config: NgbCarouselConfig,
      private getId: GetIDService 
    ){
    config.showNavigationIndicators = false;
    }

  ngOnInit(): void {
    this.http.getNowMovie().subscribe((data: any) => {
      this.nowMovie = data.results
    },
    (error) => { console.log(error) });

    this.http.getTrendingTV().subscribe((data: any) => {
      this.trendingTv = data.results
    },
    (error) => { console.log(error) });
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

}
