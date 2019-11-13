import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {
 searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieService: MoviesService) {}

  searchMovies() {
    this._movieService.searchMovies(this.searchStr).subscribe(res => {
        this.searchRes = res.results;
    })
}
  ngOnInit() {
  }

}

