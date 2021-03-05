import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap'
import {CarouselImagesService} from '../carousel-images.service'


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  @ViewChild('mycarousel', {static : true}) 
  carousel: any;
  images: string[] = []
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  constructor(private carouselImagesService: CarouselImagesService) { }

  ngOnInit() {
    for (let i = 1; i < 4; i++) {
      this.carouselImagesService.getCarouselImages()
        .subscribe((data: any) => this.images.push(data.url))
    }
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
