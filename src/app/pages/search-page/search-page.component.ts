import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { GetIDService } from '../item-page/services/get-id.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  searchName : string = ""

  searchResults : any[] = []

  constructor(
    private http : HttpService,
    private getId: GetIDService,
    public spinnerService : SpinnerService,
    private location : Location
    ) {}

  onSearch(event: any) {
    this.searchName = event.target.value
    this.http.getSearch(this.searchName).subscribe((data: any) => {
      this.searchResults = data.results
    },
    (error) => { console.log(error) });
  }

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }  

  back() {
    this.location.back()
  }

}
