import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  
  constructor(private http: HttpClient) { }

  parks: any
  images: any

  ngOnInit() {
    this.http.get("https://nps-api-app-1.herokuapp.com/parks")
    .subscribe((data: any) => this.displayParks(data))
  }

  displayParks(data: Object) {
    this.parks = data
  }

}
