import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UtilService } from '../services/util.service';
import { localStorageKeys } from '../enum/enum';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(
    private router: Router,
    private utils: UtilService,
  ) {
  }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.utils.getLocalStorage(localStorageKeys.accessToken)) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
