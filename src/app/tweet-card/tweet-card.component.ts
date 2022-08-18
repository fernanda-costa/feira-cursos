import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {

    @Input() tweet!: Tweet;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
