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
  images: string[] = ["https://images.unsplash.com/photo-1435097791017-d2a958c96f81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80", "https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80", "https://images.unsplash.com/photo-1557401620-67270b61ea82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1549402214-3259d82d37b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80", "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1445462657202-a0893228a1e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"]
  altText: string[] = ["statue of liberty", "yosemite national park river in autumn", "bald eagle flying", "glacier bay", "silhouetted figure looking up at milky way", "dream lake at rocky mountain national park"]
  title: string[] = []
  credit: string[] = []
  caption: string[] = []
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  constructor(private carouselImagesService: CarouselImagesService) { }

  ngOnInit() {
    // for (let i = 1; i < 7; i++) {
    //   this.carouselImagesService.getCarouselImages()
    //     .subscribe((data: any) => 
    //       this.images.push(data.url)
    //       this.altText.push(data.alt_text)
    //       && this.title.push(data.title)
    //       && this.credit.push(data.credit)
    //       && this.caption.push(data.caption)
    //     )
    // }
    // console.log(this.title)
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
