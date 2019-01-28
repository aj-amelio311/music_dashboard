import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import {TypeaheadService} from '../../services/typeahead.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  animations: [
   trigger('slide', [
     transition("void=>*", [
       style({transform: "translateY(-90px)"}),
       animate(350)
     ])
   ]),
   trigger('fade', [
     transition("void=>*", [
       style({opacity: 0}),
       animate(350)
     ])
   ])
 ]
})
export class SearchbarComponent implements OnInit {
  artist:string = "";
  suggestions:string[];
  constructor(
    private router: Router,
    private _typeahead: TypeaheadService
  ) { }

  ngOnInit() {
  }

  artistSearch(form) {
    this.artist = form.value.artistName;
    this.router.navigate([`artist/${this.artist}`]);
    form.reset();
  }

  typeahead(element) {
    let term = element.target.value
    if (term !== "") {
      this._typeahead.getResults(term).subscribe((resp) => {
        this.suggestions = resp.json().results.artistmatches.artist.slice(0, 4)
      })
    }
  }

}
