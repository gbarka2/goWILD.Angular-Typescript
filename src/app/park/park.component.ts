import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})

export class ParkComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  park: any

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('id')
        this.http.get("https://nps-api-app-1.herokuapp.com/parks/" + id)
          .subscribe((data) => this.displayPark(data))
      })
  }

  displayPark(data: Object) {
    this.park = data
  }

}
