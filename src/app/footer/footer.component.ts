import { Component, OnInit } from '@angular/core';
import {ContactComponent} from '../contact/contact.component'
import {faCompass} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faCompass = faCompass

  constructor() { }

  ngOnInit(): void {
  }

}
