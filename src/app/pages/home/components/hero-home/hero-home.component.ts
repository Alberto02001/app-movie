import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit{

  nowMovie : any[] = []

  TrendingTv : any[] = []

  constructor(
      private http : HttpService, 
      config: NgbCarouselConfig,
      private route: ActivatedRoute,
      private router: Router 
    ){
    config.showNavigationIndicators = false;
    }

  ngOnInit(): void {
    this.http.getNowMovie().subscribe((data: any) => {
      this.nowMovie = data.results
    },
    (error) => { console.log(error) });

    this.http.getTrendingTV().subscribe((data: any) => {
      this.TrendingTv = data.results
    },
    (error) => { console.log(error) });
  }

  navigateToItem(){
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this.router.navigate(['item'], {
     relativeTo: this.route,
     queryParams: {
       id: '123'
     },
     queryParamsHandling: 'merge',
     // preserve the existing query params in the route
     skipLocationChange: true
     // do not trigger navigation
   });
  }

}
