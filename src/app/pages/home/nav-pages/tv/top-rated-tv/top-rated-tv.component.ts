import { Component, OnInit } from '@angular/core';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.scss']
})
export class TopRatedTvComponent implements OnInit{

  tv : any = []

  constructor(
    private http : HttpService,
    private getId: GetIDService 
  ){}

  ngOnInit(): void {
    this.http.getTopRatedTV().subscribe((data: any) => {
      this.tv = data.results
    },
    (error) => { console.log(error) });
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

}