import { Component, OnInit } from '@angular/core';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.scss']
})
export class PopularTvComponent implements OnInit{

  tv : any = []

  constructor(
    private http : HttpService,
    private getId: GetIDService 
  ){}

  ngOnInit(): void {
    this.http.getPopularTV().subscribe((data: any) => {
      this.tv = data.results
    },
    (error) => { console.log(error) });
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }

}