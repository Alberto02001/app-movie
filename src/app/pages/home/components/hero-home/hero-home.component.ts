import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent{

  @Input() nowMovie : any = []

  @Input() trendingTv : any = []

  loading: boolean = true
  
  loading2: boolean = true

  constructor(
      config: NgbCarouselConfig,
      private getId: GetIDService
    ){
    config.showNavigationIndicators = false;
    }

  onLoad() {
    this.loading = false;
  }

  onLoad2() {
    this.loading2 = false;
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

}
