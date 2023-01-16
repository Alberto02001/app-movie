import { Component, Input } from '@angular/core';
import { GetIDService } from 'src/app/pages/item-page/services/get-id.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent{

  @Input() topMovie : any[] = []

  @Input() popularMovie : any[] = [] 

  @Input() topTV : any[] = []

  @Input() popularTV : any[] = []

  scrollvalue : number = 900

  constructor(
    private getId: GetIDService
    ) {}

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

  scrollLeft2() : void {
    document.getElementById("scroll2")!.scrollLeft += -this.scrollvalue;
  };

  scrollRight2() : void {
    document.getElementById("scroll2")!.scrollLeft += this.scrollvalue;
  };

  scrollLeft3() : void {
    document.getElementById("scroll3")!.scrollLeft += -this.scrollvalue;
  };

  scrollRight3() : void {
    document.getElementById("scroll3")!.scrollLeft += this.scrollvalue;
  };

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }  

}
