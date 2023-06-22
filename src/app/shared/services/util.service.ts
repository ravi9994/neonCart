import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from "crypto-js";
import { environment } from 'src/environments/environment';
import { localStorageKeys } from '../enum/enum';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public detectChangeInCart: BehaviorSubject<any> = new BehaviorSubject(false);
  public loader = null;
  public static isLogin: boolean;
  public static loginUserDetails;
  cartList = [
    {
      image: './../../../assets/images/cameras.png',
      name: 'Camera',
      type: 'Electronics',
      qty: 2,
      price: '60.00',
      total: '120.00'
    },
    {
      image: './../../../assets/images/alexa.png',
      name: 'Alexa',
      type: 'Electronics',
      qty: 4,
      price: '70.00',
      total: '140.00'
    },
    {
      image: './../../../assets/images/bluetooth.png',
      name: 'Bluetooth',
      type: 'Electronics',
      qty: 2,
      price: '55.00',
      total: '110.00'
    },
    {
      image: './../../../assets/images/headphone.png',
      name: 'HeadPhone',
      type: 'Electronics',
      qty: 1,
      price: '70.00',
      total: '70.00'
    },
    {
      image: './../../../assets/images/powerback.png',
      name: 'Powerback',
      type: 'Electronics',
      qty: 3,
      price: '10.00',
      total: '30.00'
    },
  ]

  constructor(
    private alertController: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
  ) {
    if (this.getLocalStorage(localStorageKeys.isLogin)) {
      UtilService.isLogin = true;
    }
    if (this.getLocalStorage(localStorageKeys.userDetails)) {
      UtilService.loginUserDetails = this.getLocalStorage(localStorageKeys.userDetails);
    }
  }

  cryptoConfig = {
    keySize: 16,
    iv: CryptoJS.enc.Utf8.parse(environment.SECRETKEY),
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  };

  encryptUsingAES256(data) {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      environment.SECRETKEY,
      this.cryptoConfig
    ).toString();
  }

  decryptUsingAES256(data) {
    const decrypted = CryptoJS.AES.decrypt(
      data,
      environment.SECRETKEY,
      this.cryptoConfig
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }

  setLocalStorage(key, value) {
    value = this.encryptUsingAES256(value);
    localStorage.setItem(key, value);
  }

  getLocalStorage(key) {
    if (localStorage.getItem(key)) {
      return this.decryptUsingAES256(localStorage.getItem(key));
    }
    return null;
  }

  markFormGroupDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      formGroup.get(key)?.markAsDirty();
    });
  }

  deleteFromCart(index: number) {
    this.showConfirmationPopup(
      'Delete',
      'Are you sure you want to delete?',
      (cb) => {
        if (cb === 1) {
          this.cartList.splice(index, 1);
          this.detectChangeInCart.next(true);
        }
      }
    );
  }

  logout() {
    this.showConfirmationPopup(
      'Logout',
      'Are you sure you want to logout?',
      (cb) => {
        if (cb === 1) {
          UtilService.isLogin = false;
          UtilService.loginUserDetails = null;
          localStorage.clear();
          this.router.navigate(['auth/login']);
        }
      }
    );
  }


  async showConfirmationPopup(title, msg, callback, buttonText: any = '') {
    const alert = await this.alertController.create({
      header: title,
      cssClass: 'confirmation-popup',
      message: msg,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            callback(0);
          }
        }, {
          text: 'Ok',
          handler: () => {
            callback(1);
          }
        }
      ]
    });

    await alert.present();
  }



  async showLoading(message: string = 'Please wait') {
    await this.loadingCtrl.create({
      message,
      animated: true
    }).then(loader => {
      this.loader = loader;
      this.loader.present();
    });
  }
  async showToastSuccess(message: string = "") {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color: "success",
    });
    toast.present();
  }

  async showToastError(message: string = "") {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color: "danger",
    });
    toast.present();
  }

  async dismissLoading() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }


}
