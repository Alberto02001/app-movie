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
    // changes the route without moving from the current view or
    // triggering a navigation event,
    const typeMedia : string = tv === undefined? "movie" : "tv"
    this.router.navigate(['item'], {
      relativeTo: this.route,
      queryParams: {
        id: id,
        type: typeMedia
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true
      // do not trigger navigation
    });
  }
}
