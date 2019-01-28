import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  animations: [
   trigger('slide', [
     transition("void=>*", [
       style({transform: "translateY(-90px)"}),
       animate(400)
     ])
   ]),
   trigger('fade', [
     transition("void=>*", [
       style({opacity: 0}),
       animate(400)
     ])
   ])
 ]
})
export class ArtistComponent implements OnInit {
  private status:number;
  private artistSearch:string;
  private artist:string;
  private img:string;
  private isTouring:string;
  private bio:string;
  private listeners:number;
  private similarArtists:any;
  private url:string;
  loading:boolean = true;
  constructor(private _get:ArtistService,
    private route:ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      window.scroll(0,0);
      this.artistSearch = params.artist;
      this._get.findArtist(this.artistSearch).subscribe((resp) => {
        this.loading = false;
        if (resp.json().status == 200) {
          this.status = 200;
        } else {
          this.status = 404;
        }
        this.artist = resp.json().name;
        this.img = resp.json().image;
        if (resp.json().is_touring == "1") {
          this.isTouring = "Yes";
        } else {
          this.isTouring = "No";
        }
        if (resp.json().bio.length == 0) {
          this.bio = "No Bio Available"
        } else {
          this.bio = resp.json().bio.split("<a")[0];
        }
        this.listeners = parseInt(resp.json().listeners)
        this.similarArtists = resp.json().similar_artists.artist;
        this.url = resp.json().url;

      })
    })
  }

  goToPage(element) {
    var win = window.open(element.target.getAttribute("url"), '_blank');
    win.focus();
  }


  goToArtist(term) {
    let artist = term.target.attributes.fullName.nodeValue;
    let artistEncode = encodeURIComponent(artist)
    this._router.navigateByUrl('/artist/' + artistEncode);
  }


}
