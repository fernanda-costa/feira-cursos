import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tweets } from './mocky/tweets';
import { Tweet } from './models/tweet';

const LS_KEY = 'tweets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tweets: Tweet[] = [];

  constructor(private httpClient: HttpClient) {
    this.tweets = tweets;
    // this.getSavedTweets();
    // this.getNewTweets();
  }


  private getSavedTweets(): Tweet[] {
    const cachedTweets = localStorage[LS_KEY];
    return cachedTweets ? JSON.parse(cachedTweets) : [];
  }

  private getNewTweets() {
    setInterval(() => {
      this.httpClient.get<Tweet[]>('localhost:5000').subscribe(newTweets => {
        if(!this.tweets?.length) {
          this.tweets = this.getSavedTweets();
        }
        this.tweets.push(...newTweets);
        localStorage[LS_KEY] = JSON.stringify(this.tweets);
      });
    }, 1000);
  }
}
