import { Component, OnInit } from '@angular/core';
import {ReviewsService} from '../../services/reviews.service';
import {ArtistService} from '../../services/artist.service';
import {NewreleasesService} from '../../services/newreleases.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  reviews:any[];
  newReleases:any[];
  loading:boolean = true;
  constructor(
    private _ReviewsService: ReviewsService,
    private _ArtistService: ArtistService,
    private _router: Router,
    private _newReleases: NewreleasesService
  ) {}
  ngOnInit() {
    this._ReviewsService.getReviews().subscribe((reviewData) => {
      this.reviews = reviewData
    })
    this._newReleases.getMusic().subscribe((newSongs) => {
      this.loading = false;
      this.newReleases = newSongs
    })
  }

  goToArtist(term) {
    this._router.navigate(['/artist/' + term.getAttribute("fullName")])
  }

  linkToSong(song) {
    var win = window.open(song.getAttribute("songlink"), '_blank');
    win.focus();
  }

}
