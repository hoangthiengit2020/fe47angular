import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isShowing: boolean = false;
  isLoggedIn: boolean = false;
  color: string = '';
  dssv: any = [
    { hoTen: 'hoàng văn thiện', lop: 'FE47' },
    { hoTen: 'Hoàng thị Yến', lop: 'FE48' },
    { hoTen: 'hoàng Thị kiều oanh', lop: 'FE49' },
    { hoTen: 'hoàng Thị kiều oanh', lop: 'FE50' },
    { hoTen: 'hoàng trung Hiếu', lop: 'FE51' },
    { hoTen: 'hoàng Thị Bích Hằng', lop: 'FE52' },
    { hoTen: 'Nguyễn Hoàng Khang', lop: 'FE53' },
  ];

  constructor() {}
  handleChange($event): void {
    this.color = $event.target.value;
  }
  ngOnInit(): void {}
}
