import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
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

  loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private http : HttpService,
    private getId : GetIDService,
    public spinnerService : SpinnerService
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

  onLoad() {
    this.loading = false;
  }

  scrollLeft() : void {
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scroll")!.scrollLeft += -width.offsetWidth + 80;
  };

  scrollRight() : void {
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scroll")!.scrollLeft += width.offsetWidth - 80;
  };

  scrollLeft1() : void {
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scroll1")!.scrollLeft += -width.offsetWidth + 80;
  };

  scrollRight1() : void {
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scroll1")!.scrollLeft += width.offsetWidth - 80;
  };

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }  

}


