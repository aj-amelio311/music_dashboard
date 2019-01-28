import { Component, OnInit } from '@angular/core';
import {ReviewserviceService} from '../../services/reviewservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  onHomePage:boolean = false;
  reviews:any[];
  loading:boolean = true;
  constructor(
    private _review:ReviewserviceService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._review.getReviews().subscribe((resp) => {
      this.loading = false;
      this.reviews = resp.json();
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


}
