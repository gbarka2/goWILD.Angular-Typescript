import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  home = "Home"
  allParks = "All Parks"
  planVisit = "Plan Your Visit"
  discover = "Discover NPS"
  about = "About"

  constructor() { }

  ngOnInit(): void {
  }

}
