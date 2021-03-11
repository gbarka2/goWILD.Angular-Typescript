import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'park-accordian',
  templateUrl: './park-accordian.component.html',
  styleUrls: ['./park-accordian.component.css']
})
export class ParkAccordianComponent implements OnInit {

  @ViewChild('myaccordion', {static : true}) accordion: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  park: any
  
  ngOnInit() {
    this.route.paramMap
      .subscribe(params=> {
        let id = params.get('id')
        this.http.get("https://nps-api-app-1.herokuapp.com/parks/" + id)
          .subscribe((data: any) => this.displayPark(data))
      })
  }

  displayPark(data: Object) {
    this.park = data
  }

  togglePanel(id: any){
    this.accordion.toggle(id);
  }

}
