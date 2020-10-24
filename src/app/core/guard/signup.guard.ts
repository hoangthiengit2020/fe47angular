import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/authentication/signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //Dùng để ngăn chặn người dùng rời khỏi component
    //return true cho phép rời khỏi và  false ở lại
    const isDirty = component.checkDirtyForm();
    const isCanDeactive = component.canDeactive();
    if (isDirty || isCanDeactive) {
      return confirm('Bạn có chắc muốn rời khỏi,..');
    }
    return true;
  }
}
