import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Park} from './park';
import {Observable} from 'rxjs'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'npsAngular';


  constructor() {}

}
