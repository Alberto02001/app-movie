import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetIDService {

  constructor(
    private router: Router 
    ) {}

  navigateToItem(id : string , tv : any){
    const typeMedia : string = tv === undefined? "movie" : "tv"
    this.router.navigate(['item'], {
      queryParams: {
        id: id,
        type: typeMedia
      },
    });
  }
}
