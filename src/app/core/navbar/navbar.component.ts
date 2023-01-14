import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  expanded : boolean = true

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  navigateToGenreMovie(id : string){
    this.router.navigate(['/home/genres-movie'], {
      relativeTo: this.route,
      queryParams: {
        id: id
      },
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });
  }

  navigateToGenreTV(id : string){
    this.router.navigate(['/home/genres-tv'], {
      relativeTo: this.route,
      queryParams: {
        id: id
      },
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });
  }

}
