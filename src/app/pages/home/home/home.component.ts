import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nowMovie : any = []

  trendingTv : any = []

  topMovie : any[] = []

  popularMovie : any[] = [] 

  topTV : any[] = []

  popularTV : any[] = []

  constructor(
    private http : HttpService,
    public spinnerService : SpinnerService
    ) {}

    ngOnInit(): void {
      this.http.getNowMovie().subscribe((data: any) => {
        this.nowMovie = data.results
      },
      (error) => { console.log(error) });
  
      this.http.getTrendingTV().subscribe((data: any) => {
        this.trendingTv = data.results
      },
      (error) => { console.log(error) });

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

}
