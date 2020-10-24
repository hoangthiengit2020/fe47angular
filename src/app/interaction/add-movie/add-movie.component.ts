import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//output ra interaction
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() addMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleAddMovie(tenPhim: string, gia: number, hinhAnh: string) {
    //emit chỉ nhận vào đúng 1 tham số
    this.addMovie.emit({ tenPhim, gia, hinhAnh });
  }
}
