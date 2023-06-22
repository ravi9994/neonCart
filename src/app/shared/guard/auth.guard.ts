import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { localStorageKeys } from '../enum/enum';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private utils: UtilService,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.utils.getLocalStorage(localStorageKeys.accessToken)) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
