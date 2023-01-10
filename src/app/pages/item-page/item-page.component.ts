import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit{

  data : any = []

  id : string = ""

  mediaType : string = ""

  itemData : any = ""

  constructor(
    private router: ActivatedRoute,
    private http : HttpService
  ){}

  ngOnInit(): void {
    this.router.queryParamMap
    .subscribe((params) => {
      this.data = {...params};
      this.id = this.data.params.id
      this.mediaType = this.data.params.type
    });
    
    this.chooseMedia(this.mediaType)
  }

  chooseMedia(type : string){
    if (type === "tv")
      this.http.getTV(this.id).subscribe((data: any) => {
        this.itemData = data
        console.log(this.itemData);
      },
      (error) => { console.log(error) });
    else if (type === "movie")
      this.http.getMovie(this.id).subscribe((data: any) => {
        this.itemData = data
        console.log(this.itemData);
      },
      (error) => { console.log(error) });    
  }
}
