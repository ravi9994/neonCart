import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.forgotForm = this.fb.group({
      email: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
    })
  }

  ngOnInit() {
  }
  onForgot() {
    this.submitted = true;
    if (this.forgotForm.valid) {
      this.submitted = false;
    }
  }

  get l() {
    return this.forgotForm.controls;
  }
}
