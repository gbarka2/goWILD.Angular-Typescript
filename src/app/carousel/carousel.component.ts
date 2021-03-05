import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbSlideEvent, NgbSlideEventSource, NgbCarousel} from '@ng-bootstrap/ng-bootstrap'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  // images = [1, 2, 3].map(() => `https://nps-api-app-1.herokuapp.com/images/${Math.random()}`)

  // imageObj: Object



  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) 
  carousel: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const getRandomNumber = () => {
      let min = Math.ceil(1)
      let max = Math.floor(379)
      return Math.floor(Math.random() * (max - min) + min)
    }

    for (let i = 1; i < 4; i++) {
      this.http.get(`https://nps-api-app-1.herokuapp.com/images/${getRandomNumber()}`)
        .subscribe((data) => console.log(data))

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
