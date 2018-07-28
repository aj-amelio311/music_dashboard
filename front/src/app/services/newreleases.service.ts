import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewreleasesService {
  constructor(private _http: Http) { }

  getMusic() {
    return this._http.get("http://ec2-18-217-223-10.us-east-2.compute.amazonaws.com:9000/newreleases").map((res) => res.json())
  }

}
