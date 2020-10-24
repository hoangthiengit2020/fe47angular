import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// ,Output,EventEmitter  để truyền dữ liệu từ component con ra component cha
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  @Output() selectMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  viewDetail() {
    //click hoạt sự kiện selectMovie
    //kết hợp output đẩy lên component cha
    this.selectMovie.emit(this.movie);
  }
}
