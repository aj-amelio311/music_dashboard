import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private _url:string = "http://ec2-18-221-45-124.us-east-2.compute.amazonaws.com:9000/charts";
  constructor(private _http: Http) { }

  getCharts() {
    return this._http.get(this._url)
  }

}
