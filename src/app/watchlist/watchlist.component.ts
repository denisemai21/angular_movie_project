import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  favorites: any [];
  constructor() { }

  ngOnInit() {
  }

}
