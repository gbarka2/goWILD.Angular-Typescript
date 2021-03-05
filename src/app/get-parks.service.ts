import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetParksService {

  constructor(private httpClient: HttpClient) { }

  // getParks() {
  //   console.log(this.httpClient.get("https://nps-api-app-1.herokuapp.com/parks")) 
  // }
}
