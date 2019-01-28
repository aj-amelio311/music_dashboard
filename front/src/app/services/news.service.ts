import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url:string = "http://ec2-18-221-45-124.us-east-2.compute.amazonaws.com:9000/news";
  constructor(private _http: Http) { }

  getNews() {
    return this._http.get(this._url)
  }

}
