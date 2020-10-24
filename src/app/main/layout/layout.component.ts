import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/Services/authentication.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  currentUser = null;
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.auth.currenUser.subscribe({
      next: (result: any) => {
        this.currentUser = result;
      },
    });
  }
}
