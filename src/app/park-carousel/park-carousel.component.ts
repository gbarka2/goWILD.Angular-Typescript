import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap'
import {CarouselImagesService} from '../carousel-images.service'
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'park-carousel',
  templateUrl: './park-carousel.component.html',
  styleUrls: ['./park-carousel.component.css']
})
export class ParkCarouselComponent implements OnInit {

  @ViewChild('mycarousel', {static : true}) 
  carousel: any;
  images: string[] = []
  altText: string[] = []
  title: string[] = []
  credit: string[] = []
  caption: string[] = []
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  constructor(private carouselImagesService: CarouselImagesService, private route: ActivatedRoute, private http: HttpClient) { }

  parkImages: any

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('id')
        this.http.get("https://nps-api-app-1.herokuapp.com/parks/" + id)
          .subscribe((data) => this.displayImages(data))
      })
  }

  displayImages(data: Object) {
    console.log(data)
    this.parkImages = data
  }
  


  onSlide(slideEvent: NgbSlideEvent) {
    slideEvent.source
    NgbSlideEventSource.ARROW_LEFT
    slideEvent.paused
    NgbSlideEventSource.INDICATOR
    NgbSlideEventSource.ARROW_RIGHT
  }

  startCarousel() {
    this.carousel.cycle();
  }

  pauseCarousel() {
    this.carousel.pause();
  }

  moveNext() {
    this.carousel.next();
  }

  getPrev() {
    this.carousel.prev();
  }

  goToSlide(slide: any) {
    this.carousel.select(slide);
  }

}
