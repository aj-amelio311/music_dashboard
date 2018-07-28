import { Component, OnInit } from '@angular/core';
import {NewreleasesService} from '../../services/newreleases.service';

@Component({
  selector: 'newreleases',
  templateUrl: './newreleases.component.html',
  styleUrls: ['./newreleases.component.css']
})
export class NewreleasesComponent implements OnInit {
  newReleases:any[];
  loading:boolean = true;
  constructor(private _newReleases: NewreleasesService) { }

  ngOnInit() {
    this._newReleases.getMusic().subscribe((resp) => {
      this.loading = false;
      this.newReleases = resp;
    })
  }

  linkToSong(song) {
    var win = window.open(song.getAttribute("songlink"), '_blank');
    win.focus();
  }

}
