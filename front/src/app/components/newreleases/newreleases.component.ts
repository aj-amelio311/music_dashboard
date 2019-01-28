import { Component, OnInit } from '@angular/core';
import { NewreleasesService } from '../../services/newreleases.service';

@Component({
  selector: 'app-newreleases',
  templateUrl: './newreleases.component.html',
  styleUrls: ['./newreleases.component.css']
})
export class NewreleasesComponent implements OnInit {
  onHomePage:boolean = false;
  items: any[];
  loading:boolean = true;
  constructor(private _getNew:NewreleasesService) { }

  ngOnInit() {
    this._getNew.getNewReleases().subscribe((resp) => {
      this.items = resp.json();
      this.loading = false;
    })

    if (window.location.href.endsWith("/#/")) {
      this.onHomePage = true;
    } else {
      this.onHomePage = false;
    }
  }

}
