import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(private http : HttpService) {}

  ngOnInit(): void {
    this.http.getTopRatedMovie().subscribe((data: any) => {
      this.topMovie = data.results
      console.log(data);
    },
    (error) => { console.log(error) });

    this.http.getTopRatedTV().subscribe((data: any) => {
      this.topTV = data.results
      console.log(data);
    },
    (error) => { console.log(error) });

    this.http.getPopularMovie().subscribe((data: any) => {
      this.popularMovie = data.results
      console.log(data);
    },
    (error) => { console.log(error) });

    this.http.getPopularTV().subscribe((data: any) => {
      this.popularTV = data.results
      console.log(data);
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


}
