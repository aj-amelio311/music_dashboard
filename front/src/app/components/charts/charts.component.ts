import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  onHomePage:boolean = false;
  charts:any[];
  loading:boolean = true;
  alpha:boolean = false;
  numer:boolean = false;
  constructor(private _charts:ChartsService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._charts.getCharts().subscribe((resp) => {
      this.charts = resp.json()
      console.log(this.charts)
      this.loading = false;
    })

    if (window.location.href.endsWith("/#/")) {
      this.onHomePage = true;
    } else {
      this.onHomePage = false;
    }
  }

  goToArtist(term) {
    let artist = term.target.attributes.fullName.nodeValue;
    let artistEncode = encodeURIComponent(artist)
    this._router.navigateByUrl('/artist/' + artistEncode);
  }

  dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  sortByArtist() {
    this.alpha = !this.alpha;
    if (this.alpha === true) {
      this.charts = this.charts.sort(this.dynamicSort("artist"));
    } else {
      this.charts = this.charts.sort(this.dynamicSort("artist")).reverse();
    }
  }

  sortByNumber() {
    this.numer = !this.numer;
    if (this.numer === true) {
      this.charts = this.charts.sort(this.dynamicSort("listeners"));
    } else {
      this.charts = this.charts.sort(this.dynamicSort("listeners")).reverse();  
    }
  }

}
