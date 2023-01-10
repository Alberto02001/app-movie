import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  searchName : string = ""

  searchResults : any[] = []

  constructor(private http : HttpService) {}

  onSearch(event: any) {
    this.searchName = event.target.value
    this.http.getSearch(this.searchName).subscribe((data: any) => {
      this.searchResults = data.results
      console.log("search",data);
    },
    (error) => { console.log(error) });
  }

  closePage(){
    window.history.back()
    console.log("work");
    
  }

}
