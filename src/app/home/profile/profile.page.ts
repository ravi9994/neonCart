import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  UserProfileForm: FormGroup;
  submitted: boolean = false;
  userDetail;

  fileName: string;
  file: File;
  imageUrl = 'assets/images/profile.png'
  constructor(private fb: FormBuilder,) {
    this.UserProfileForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem("userDetail"));
    this.UserProfileForm.patchValue({
      first_name: this.userDetail.firstname,
      last_name: this.userDetail.lastname,
      email: this.userDetail.email,
      phone_number: this.userDetail.phone_number,
    });
  }

  onLogin() {
    this.submitted = true;
    if (this.UserProfileForm.valid) {
      this.submitted = false;
    }
  }

  get l() {
    return this.UserProfileForm.controls;
  }


}
