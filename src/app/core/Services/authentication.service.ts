import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Cơ chế giống redux trong react
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  //đi theo 1 cặp
  // BehaviorSubject cập nhật và lưu trữ data
  private currentUserSubject = new BehaviorSubject(null);
  //currentUser: Để component có thể subcribe dc sự thay đổi
  currenUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}
  initCurrentUser() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this.currentUserSubject.next(JSON.parse(userInfo));
    }
  }
  dangKy(value: any) {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post(url, { ...value, maNhom: 'GP01' });
  }
  dangNhap(values: any) {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post(url, values).pipe(
      tap((result) => {
        console.log('pipe', result);
        this.currentUserSubject.next(result);
      })
    );
  }
}
