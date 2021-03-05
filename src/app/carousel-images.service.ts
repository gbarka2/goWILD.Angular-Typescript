import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarouselImages } from './carousel-images';

@Injectable({
  providedIn: 'root'
})

export class CarouselImagesService {

  getRandomNumber = () => {
    let min = Math.ceil(1)
    let max = Math.floor(376)
    return Math.floor(Math.random() * (max - min) + min)
  }

  constructor(private http: HttpClient) { }

  getCarouselImages(): Observable<ICarouselImages[]> {
    const url: string = `https://nps-api-app-1.herokuapp.com/images/${this.getRandomNumber()}`
    return this.http.get<ICarouselImages[]>(url)
  }

}
