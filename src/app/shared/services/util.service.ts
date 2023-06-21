import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public detectChangeInCart: BehaviorSubject<any> = new BehaviorSubject(false);

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
  ) {

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


}
