import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss', ]
})
export class ItemPageComponent implements OnInit, AfterViewInit, OnDestroy{

  currentRate = 5

  data : any = []

  id : string = ""

  mediaType : string = ""

  itemData : any = []

  videos : any = []

  credits : any = []

  similar : any = []

  loading: boolean = true

  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

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

  ngAfterViewInit() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onLoad() {
    this.loading = false;
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
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scrollCast")!.scrollLeft += -width.offsetWidth;
  };

  scrollRightCast() : void {
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scrollCast")!.scrollLeft += width.offsetWidth;
  };

  scrollLeft() : void {
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scroll")!.scrollLeft += -width.offsetWidth;
  };

  scrollRight() : void {
    let width = document.querySelector('.scroll-container') as HTMLElement
    document.getElementById("scroll")!.scrollLeft += width.offsetWidth;
  };

  goToActor(id : string){
    this.router.navigate(['/actor'], {
      queryParams: {
        id: id
      }
    });
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