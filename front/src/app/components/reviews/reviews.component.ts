import { Component, OnInit } from '@angular/core';
import {ReviewsService} from '../../services/reviews.service';
import {ArtistService} from '../../services/artist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews:any[];
  constructor(
    private _ReviewsService:ReviewsService,
    private _ArtistService: ArtistService,
    private _router: Router
  ) { }

  ngOnInit() {
  this._ReviewsService.getReviews().subscribe((reviewData) => {
    this.reviews = reviewData;
  })
  }

  goToArtist(term) {
    this._router.navigate(["/artist/" + term.getAttribute("fullName")])
  }

}
