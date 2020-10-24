import { Component, OnInit, ViewChild } from '@angular/core';
//viewChild dùng để view tất cả các thành phần con của nó không thểm view tới cháu đc
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetaiComponent } from './movie-detai/movie-detai.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  @ViewChild(MovieListComponent) MovieListComponent: MovieListComponent;
  @ViewChild(MovieDetaiComponent) MovieDetaiComponent: MovieDetaiComponent;
  // @ViewChild(MovieListComponent) MovieListComponent=>đây là tên tự đặt: MovieListComponent;
  constructor() {}

  ngOnInit(): void {}
  // themPhim(tenPhim: string, gia: string, hinhAnh: string) {
  //   this.MovieListComponent.movieList.push({ tenPhim, gia, hinhAnh });
  // }
  handleThemPhim({ tenPhim, gia, hinhAnh }) {
    this.MovieListComponent.movieList.push({ tenPhim, gia, hinhAnh });
  }
  handleSelectMovie(movie) {
    this.MovieDetaiComponent.movieDetail = movie;
  }
}
