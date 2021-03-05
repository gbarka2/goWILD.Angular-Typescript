import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {


  parks: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://nps-api-app-1.herokuapp.com/parks")
    .subscribe((data) => this.displayParks(data))
  }

  displayParks(data: Object) {
    // console.log(data)
    this.parks = data
  }

}
