import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private _url:string = "http://ec2-18-217-223-10.us-east-2.compute.amazonaws.com:9000/charts";

  constructor(private _http: Http) { }

  getChart() {
    return this._http.get(this._url).map((res) => res.json());
  }

}
