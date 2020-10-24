import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.scss'],
})
export class DemocomponentComponent implements OnInit {
  messege: string = 'hello';
  disabled: boolean = true;
  userName: string = '';
  email: string = '';
  address: string = '';
  fullName: string = '';
  constructor() {}

  ngOnInit(): void {}

  changeMessage(message: string): void {
    this.messege = message;
  }
  changeUserName(element: any): void {
    // console.log(element);
    this.userName = element.value;
  }
  changeEmail(evt: any): void {
    this.email = evt.target.value;
  }
}
