import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from './news';
import {npsKey} from '../config'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<INews[]> {
    const url: string = `https://developer.nps.gov/api/v1/articles?&limit=6&${npsKey}`
    return this.http.get<INews[]>(url)
  }
}
