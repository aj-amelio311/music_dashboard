import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChartsService} from '../../services/charts.service';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  charts:any[];

  constructor(private _ChartsService: ChartsService, private _router:Router) { }

  ngOnInit() {
    this._ChartsService.getChart().subscribe((res) => {
      this.charts = res
    })
  }

  goToArtist(term) {
    this._router.navigate(['/artist/' + term.textContent]);
  }

}
