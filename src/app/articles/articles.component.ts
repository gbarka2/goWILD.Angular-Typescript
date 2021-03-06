import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service'

@Component({
  selector: 'newsarticles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  newsArticles: object[] = []

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe((data: any) => this.newsArticles = data.data && console.log('news', data.data))
      // console.log('news', data)
  }
}
