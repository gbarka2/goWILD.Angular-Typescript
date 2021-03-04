import { Component, OnInit } from '@angular/core';
import {ContactComponent} from '../contact/contact.component'

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  disclaimer = "Please Note: This is a simulated version of the NPS website, please refer to nps.gov for official government information."

  constructor() { }

  ngOnInit(): void {
  }

}
