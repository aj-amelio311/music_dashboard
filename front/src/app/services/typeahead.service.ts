import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TypeaheadService {

  constructor(private _http: Http) { }

  getResults(artist:string) {
      return this._http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=dc970420dad3cf80a0443b46cf07bbf4&format=json
`).map((res) => res.json())
  }


}
