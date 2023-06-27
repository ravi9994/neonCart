import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { localStorageKeys } from 'src/app/shared/enum/enum';
import { UtilService } from 'src/app/shared/services/util.service';
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
  imageUrl = 'assets/images/profile.png';

  constructor(
    private fb: FormBuilder,
    private utilService: UtilService,
    private router: Router,
  ) {
    this.UserProfileForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onFileChange(e) {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(file);
  }


  ionViewWillEnter() {
    this.userDetail = this.utilService.getLocalStorage(localStorageKeys.userDetails);
    if (this.userDetail) {
      this.imageUrl = this.userDetail.image;
      this.UserProfileForm.patchValue({
        first_name: this.userDetail.firstName,
        last_name: this.userDetail.lastName,
        email: this.userDetail.email,
        phone_number: this.userDetail.number,
        address: this.userDetail.address ? this.userDetail.address : null,
        city: this.userDetail.city ? this.userDetail.city : null
      });
    }
  }

  onLogin() {
    this.submitted = true;
    if (this.UserProfileForm.valid) {
      this.submitted = false;
      const params = {
        email: this.UserProfileForm.value.email,
        firstName: this.UserProfileForm.value.first_name,
        lastName: this.UserProfileForm.value.last_name,
        number: this.UserProfileForm.value.phone_number,
        address: this.UserProfileForm.value.address,
        city: this.UserProfileForm.value.city,
        type: 'Seller',
        image: this.imageUrl
      };
      UtilService.loginUserDetails = params;
      this.utilService.setLocalStorage(localStorageKeys.userDetails, params);
      this.router.navigate(['home']);
    }
  }

  get l() {
    return this.UserProfileForm.controls;
  }


}
