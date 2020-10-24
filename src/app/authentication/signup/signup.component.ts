import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/Services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm;
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {}
  @HostListener('window:beforeunload', ['$event'])
  canDeactive() {
    return !this.signupForm.dirty;
  }

  checkDirtyForm() {
    return this.signupForm.dirty;
  }
  xuLyDangKy(signupForm: NgForm) {
    //Kiểm tra form có hợp lệ hay ko
    if (signupForm.invalid) return;
    //Call API
    console.log(signupForm.value);
    this.auth.dangKy(signupForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => console.log(err.error),
      complete: () => console.log('Đăng ký đã thành công '),
    });
  }
}
