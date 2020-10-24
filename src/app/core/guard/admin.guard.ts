import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //hàm canActivate dùng để bảo vệ root khi người dùng muốn truy cập vào
    //Nếu return true cho phép truy cập vào và ngược lại false ko
    const userInfor = localStorage.getItem('userInfo');
    if (userInfor) {
      const { maLoaiNguoiDung } = JSON.parse(userInfor);
      if (maLoaiNguoiDung === 'QuanTri') {
        //Là admin thì cho phép vào
        return true;
      }
      //Đã đăng nhập , nhưng mã người dùng khác quản trị
      //=>Redirect người dùng về Homepage
      this.router.navigate(['/']);
      return false;
    }
    //Chưa đăng nhập =>Redirect về signin
    this.router.navigate(['/signin']);
    return false;
  }
}
