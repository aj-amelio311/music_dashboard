import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TypeaheadService} from '../../services/typeahead.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  suggestions:string[];

  constructor(
    private router: Router,
    private _typeahead: TypeaheadService
  ) { }

  searchArtist(term) {
    var cleanTerm = term.value.replace("&", "and").replace("'", "%27").replace("-", "%2D").replace(",", "%2C").replace(".", "%2E")
    this.router.navigate(['/artist/' + cleanTerm]);
    term.value = "";
    location.reload();
  }

  typeahead(term) {
    if (term !== "") {
      this._typeahead.getResults(term).subscribe((resp) => {
        this.suggestions = resp.results.artistmatches.artist.slice(0, 4)
      })
    }

  }

  ngOnInit() {
  }

}
