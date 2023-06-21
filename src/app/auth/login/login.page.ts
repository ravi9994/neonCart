import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {
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
    }
  }

  get l() {
    return this.loginForm.controls;
  }
}
