import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/Services/authentication.service';
//metaData
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//bản chất angular chỉ có class này để angular hiểu dc thì phải khai báo @components ở trên
export class AppComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}
  ngOnInit(): void {
    this.auth.initCurrentUser();
  }
  title = 'fe47-angular';
}
