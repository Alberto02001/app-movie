import { Component, OnInit } from '@angular/core';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit{

  topMovie : any[] = []

  popularMovie : any[] = [] 

  topTV : any[] = []

  popularTV : any[] = []

  scrollvalue : number = 900

  constructor(
    private http : HttpService,
    private getId: GetIDService,
    public spinnerService : SpinnerService
    ) {}

  ngOnInit(): void {
    this.http.getTopRatedMovie(1).subscribe((data: any) => {
      this.topMovie = data.results
    },
    (error) => { console.log(error) });

    this.http.getTopRatedTV(1).subscribe((data: any) => {
      this.topTV = data.results
    },
    (error) => { console.log(error) });

    this.http.getPopularMovie(1).subscribe((data: any) => {
      this.popularMovie = data.results
    },
    (error) => { console.log(error) });

    this.http.getPopularTV(1).subscribe((data: any) => {
      this.popularTV = data.results
    },
    (error) => { console.log(error) });

  }

  scrollLeft() : void {
    document.getElementById("scroll")!.scrollLeft += -this.scrollvalue;
  };

  scrollRight() : void {
    document.getElementById("scroll")!.scrollLeft += this.scrollvalue;
  };

  
  scrollLeft1() : void {
    document.getElementById("scroll1")!.scrollLeft += -this.scrollvalue;
  };

  scrollRight1() : void {
    document.getElementById("scroll1")!.scrollLeft += this.scrollvalue;
  };

  scrollLeft2() : void {
    document.getElementById("scroll2")!.scrollLeft += -this.scrollvalue;
  };

  scrollRight2() : void {
    document.getElementById("scroll2")!.scrollLeft += this.scrollvalue;
  };

  scrollLeft3() : void {
    document.getElementById("scroll3")!.scrollLeft += -this.scrollvalue;
  };

  scrollRight3() : void {
    document.getElementById("scroll3")!.scrollLeft += this.scrollvalue;
  };

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }  

}
