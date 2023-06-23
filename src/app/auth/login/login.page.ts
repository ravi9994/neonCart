import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { localStorageKeys } from 'src/app/shared/enum/enum';
import { UtilService } from 'src/app/shared/services/util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private utilService: UtilService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.submitted = false;
      if (this.loginForm.value.username == 'test@gmail.com' && this.loginForm.value.password == 'Test@123') {
        const params = {
          email: 'test@gmail.com',
          firstName: 'Johan',
          lastName: 'doe',
          number: 7698918171,
          type: 'Seller',
          image: 'assets/images/profile.png'
        };
        this.utilService.setLocalStorage(localStorageKeys.userDetails, params);
        this.utilService.setLocalStorage(localStorageKeys.isLogin, true);
        this.utilService.setLocalStorage(localStorageKeys.accessToken, 'STORENEONCART!@£TEST001');
        UtilService.isLogin = true;
        UtilService.loginUserDetails = params;
        this.router.navigate(['/home']);
        this.utilService.showToastSuccess('Login successfully');
      } else {
        this.utilService.showToastError('Enter valid email and password');
      }
    }
  }

  get l() {
    return this.loginForm.controls;
  }
}
