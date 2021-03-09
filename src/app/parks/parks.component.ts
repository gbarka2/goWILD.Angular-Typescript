import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {


  parks: any
  images: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://nps-api-app-1.herokuapp.com/parks")
    .subscribe((data: any) => this.displayParks(data))
  }

  displayParks(data: Object) {
    this.parks = data
    console.log(data)
  }

  displayImages(data: Object) {
    console.log(data)
  }

}
