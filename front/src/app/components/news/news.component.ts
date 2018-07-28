import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any[];

  constructor(private _NewsService: NewsService) { }

  ngOnInit() {
    this._NewsService.getNews().subscribe((res) => {
      this.news = res;
    })
  }

}
