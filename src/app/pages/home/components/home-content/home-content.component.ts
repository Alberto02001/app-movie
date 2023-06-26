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

  scrollContainer : HTMLElement;

  constructor(
    private getId: GetIDService
    ) {}

  ngAfterViewInit() {
    this.scrollContainer = document.querySelector('.scroll-container') as HTMLElement
  }

  scrollLeft() : void {
    document.getElementById("scroll")!.scrollLeft += -this.scrollContainer.offsetWidth + 110;
  };

  scrollRight() : void {
    document.getElementById("scroll")!.scrollLeft += this.scrollContainer.offsetWidth - 110;
  };

  
  scrollLeft1() : void {
    document.getElementById("scroll1")!.scrollLeft += -this.scrollContainer.offsetWidth + 110;
  };

  scrollRight1() : void {
    document.getElementById("scroll1")!.scrollLeft += this.scrollContainer.offsetWidth - 110;
  };

  scrollLeft2() : void {
    document.getElementById("scroll2")!.scrollLeft += -this.scrollContainer.offsetWidth + 110;
  };

  scrollRight2() : void {
    document.getElementById("scroll2")!.scrollLeft += this.scrollContainer.offsetWidth - 110;
  };

  scrollLeft3() : void {
    document.getElementById("scroll3")!.scrollLeft += -this.scrollContainer.offsetWidth + 110;
  };

  scrollRight3() : void {
    document.getElementById("scroll3")!.scrollLeft += this.scrollContainer.offsetWidth - 110;
  };

  navigateTo(id : string , tv : any){
    this.getId.navigateToItem(id, tv)
  }  

}
