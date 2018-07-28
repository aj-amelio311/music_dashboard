import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import {ArtistService} from '../../services/artist.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist:string;
  artistData:any[];
  similarArtists:any[];
  tags:string[] = [];
  isTouring:string;
  bio:string;
  validResponse:boolean;
  redirect:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _ArtistService: ArtistService
  ) {
    this._router = _router;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._ArtistService.getArtist(params.artistName).subscribe((res) => {
        if (res.status == 200) {
          this.artistData = res;
          this.tags = res.tags;
          this.bio = res.bio.split("<a")[0];
          this.similarArtists = res.similar_artists.artist;
          if (parseInt(res.is_touring) == 0) {
            this.isTouring = "No";
          } else {
            this.isTouring = "Yes";
          }
          this.validResponse = true;
        } else {
          this.validResponse = false;
        }
      })
    })
  }

  goToArtist(term) {
    var artistEncode = encodeURIComponent(term.getAttribute("fullName"))
    this._router.navigateByUrl('/artist/' + artistEncode);
  }

  goToPage(element) {
    var win = window.open(element.target.getAttribute("url"), '_blank');
    win.focus();
  }

}
