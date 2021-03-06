import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service'

@Component({
  selector: 'newsarticles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  newsArticles: any

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe((data: any) => this.displayArticles(data.data))
  }

  displayArticles(data: object[]) {
    this.newsArticles = data
    console.log(this.newsArticles)
  }
}
