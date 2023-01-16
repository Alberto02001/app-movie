import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit, AfterViewInit, OnDestroy{

  data : any = []

  id : string = ""

  mediaType : string = ""

  itemData : any = []

  videos : any = []

  credits : any = []

  similar : any = []

  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  scrollvalue : number = 900

  constructor(
    private route: ActivatedRoute,
    private http : HttpService,
    private router: Router,
    config: NgbCarouselConfig,
    private _changeDetectorRef: ChangeDetectorRef,
    public spinnerService : SpinnerService
  ){
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((params) => {
      this.data = {...params};
      this.id = this.data.params.id
      this.mediaType = this.data.params.type
    });
    
    this.chooseMedia(this.mediaType)
  }

  chooseMedia(type : string){
    if (type === "tv"){
      this.http.getTV(this.id).subscribe((data: any) => {
        this.itemData = data
      },
      (error) => { console.log(error) });
    
      this.http.getTVvideo(this.id).subscribe((data: any) => {
        const vids : any = []
        data.results.forEach((item: any) => {vids.push(item.key)});
        this.videos = vids
      },
      (error) => { console.log(error) });

      this.http.getTVcredits(this.id).subscribe((data: any) => {
        this.credits = data.cast 
      },
      (error) => { console.log(error) });

      this.http.getTVsimilar(this.id).subscribe((data: any) => {
        this.similar = data.results
      },
      (error) => { console.log(error) });


    }else if (type === "movie"){
      this.http.getMovie(this.id).subscribe((data: any) => {
        this.itemData = data
      },
      (error) => { console.log(error) }); 
      
      this.http.getMovieVideo(this.id).subscribe((data: any) => {
        const vids : any = []
        data.results.forEach((item: any) => {vids.push(item.key)});
        this.videos = vids
      },
      (error) => { console.log(error) });

      this.http.getMovieCredits(this.id).subscribe((data: any) => {
        this.credits = data.cast
      },
      (error) => { console.log(error) });

      this.http.getMovieSimilar(this.id).subscribe((data: any) => {
        this.similar = data.results
      },
      (error) => { console.log(error) });
    }
  }

  goToSimilar(id : string){
    this.id = id
    window.scroll({ 
      top: 0, 
      left: 0, 
    });
    this.chooseMedia(this.mediaType)
  } 

  scrollLeftCast() : void {
    document.getElementById("scrollCast")!.scrollLeft += -this.scrollvalue;
  };

  scrollRightCast() : void {
    document.getElementById("scrollCast")!.scrollLeft += this.scrollvalue;
  };

  scrollLeft() : void {
    document.getElementById("scroll")!.scrollLeft += -this.scrollvalue;
  };

  scrollRight() : void {
    document.getElementById("scroll")!.scrollLeft += this.scrollvalue;
  };

  goToActor(id : string){
    this.router.navigate(['/actor'], {
      relativeTo: this.route,
      queryParams: {
        id: id
      },
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }


  onResize = (): void => {
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth - 150, 1000);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}  