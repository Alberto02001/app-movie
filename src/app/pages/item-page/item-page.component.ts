import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit{

  id : any = ""

  constructor(
    private router: ActivatedRoute 
  ){}
  ngOnInit(): void {
    this.router.queryParamMap
    .subscribe((params) => {
      this.id = {...params};
      this.id = this.id.params.id
      console.log(this.id);
      
    });
  }

}
