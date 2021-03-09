import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Park} from './park';
import {Observable} from 'rxjs'
import {faCompass} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goWILD';
  faCompass = faCompass

  constructor() {}

}
