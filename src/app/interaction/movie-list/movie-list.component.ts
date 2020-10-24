import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
} from '@angular/core';

// ViewChildren, QueryList để view danh sách component ko còn đơn thuần view 1 component
import { MovieItemComponent } from '../movie-item/movie-item.component';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Output() selectMovie = new EventEmitter();
  @ViewChildren(MovieItemComponent) movieItemComponent: QueryList<
    MovieItemComponent
  >;
  movieList: any[] = [
    {
      tenPhim: 'Avengers',
      gia: 80000,
      hinhAnh: 'assets/images/1.png',
    },
    {
      tenPhim: 'SpiderMan',
      gia: 100000,
      hinhAnh: 'assets/images/2.png',
    },
    {
      tenPhim: 'Rom',
      gia: 80000,
      hinhAnh: 'assets/images/3.png',
    },
    {
      tenPhim: 'Hello',
      gia: 700000,
      hinhAnh: 'assets/images/2.jpg',
    },
  ];
  // movieDetail: any = null;
  constructor() {}

  ngOnInit(): void {}
  viewDetail(movie: any) {
    // this.movieDetail = movie;
    this.selectMovie.emit(movie);
    this.movieItemComponent.forEach((item: MovieItemComponent) => {
      console.log(item.movie);
    });
  }
}
