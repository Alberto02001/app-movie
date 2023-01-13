import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { GetIDService } from '../item-page/services/get-id.service';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.scss']
})
export class ActorPageComponent implements OnInit{

  data : any = {}

  id : any = ""

  actorData : any = []

  movie : any = []

  tv : any = []

  scrollvalue : number = 900

  constructor(
    private route: ActivatedRoute,
    private http : HttpService,
    private getId : GetIDService
  ){}

  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((params) => {
      this.data = {...params};
      this.id = this.data.params.id
    });

    this.http.getActorDetails(this.id).subscribe((data: any) => {
      this.actorData = data
    },
    (error) => { console.log(error) });

    this.http.getActorMovie(this.id).subscribe((data: any) => {
      this.movie = data.cast;
    },
    (error) => { console.log(error) });

    this.http.getActorTV(this.id).subscribe((data: any) => {
      this.tv = data.cast;
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

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }  

}


