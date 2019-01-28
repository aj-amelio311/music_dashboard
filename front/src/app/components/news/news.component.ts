import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  onHomePage:boolean = false;
  news:any[];
  constructor(private _news: NewsService) { }

  ngOnInit() {
    this._news.getNews().subscribe((resp) => {
      console.log(resp.json())
      this.news = resp.json();
    })
    if (window.location.href.endsWith("/#/")) {
      this.onHomePage = true;
    } else {
      this.onHomePage = false;
    }
  }
}
