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
      queryParams: {
        id: id
      }
    });
  }

  navigateToGenreTV(id : string){
    this.router.navigate(['/home/genres-tv'], {
      queryParams: {
        id: id
      }
    });
  }

}
