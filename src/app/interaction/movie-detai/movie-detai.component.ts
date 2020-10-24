import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detai',
  templateUrl: './movie-detai.component.html',
  styleUrls: ['./movie-detai.component.scss'],
})
export class MovieDetaiComponent implements OnInit {
  movieDetail: any = null;
  constructor() {}

  ngOnInit(): void {}
}
