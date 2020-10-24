import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  //truyền xuống tên gì thì phải input tên giống vậy
  @Input() ghe: any;
  dangDat: boolean = false;
  @Output() onSelect = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  datGhe() {
    this.dangDat = !this.dangDat;
    this.onSelect.emit({ ...this.ghe, dangDat: this.dangDat });
  }
}
