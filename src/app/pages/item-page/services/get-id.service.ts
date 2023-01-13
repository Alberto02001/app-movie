import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetIDService {

  constructor(
    private route: ActivatedRoute,
    private router: Router 
    ) {}

  navigateToItem(id : string , tv : any){
    const typeMedia : string = tv === undefined? "movie" : "tv"
    this.router.navigate(['item'], {
      relativeTo: this.route,
      queryParams: {
        id: id,
        type: typeMedia
      },
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });
  }
}
