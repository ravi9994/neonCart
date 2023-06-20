import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {
  activeTab: string = 'shopping-card';
  cartList: any = [
    {
      image: './../../../assets/images/cameras.png',
      name: 'Camera',
      type: 'Electronics',
      qty: 15,
      price: '$138.00'
    },
    {
      image: './../../../assets/images/alexa.png',
      name: 'Alexa',
      type: 'Electronics',
      qty: 10,
      price: '$26.00'
    },
    {
      image: './../../../assets/images/bluetooth.png',
      name: 'Bluetooth',
      type: 'Electronics',
      qty: 5,
      price: '$36.00'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  changeDecrement(i) {
    console.log('dis');
    if (this.cartList[i].qty > 0) {
      this.cartList[i].qty = this.cartList[i].qty - 1;
    } else {
      this.cartList[i].qty = 0;
    }
  }

  changeInputNumber(i) {
    if (this.cartList[i].qty < 0) {
      this.cartList[i].qty = 0;
    }
  }

  changeIncrement(i) {
    this.cartList[i].qty = this.cartList[i].qty + 1;
  }

}
