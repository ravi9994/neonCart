import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {
  activeTab: string = 'shopping-card';
  billingForm: FormGroup;
  submitted: boolean = false;
  cartList: any = [
    {
      image: './../../../assets/images/cameras.png',
      name: 'Camera',
      type: 'Electronics',
      qty: 2,
      price: '$69.00',
      total: '$138.00'
    },
    {
      image: './../../../assets/images/alexa.png',
      name: 'Alexa',
      type: 'Electronics',
      qty: 2,
      price: '$69.00',
      total: '$138.00'
    },
    {
      image: './../../../assets/images/bluetooth.png',
      name: 'Bluetooth',
      type: 'Electronics',
      qty: 2,
      price: '$69.00',
      total: '$138.00'
    }
  ]
  constructor(private fb: FormBuilder) {
    this.billingForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      companyname: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    })
  }

  ngOnInit() {
  }

  changeDecrement(i) {
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
  onNext() {
    this.activeTab = 'checkout';
  }

  onShop() {
    this.submitted = true;
    if (this.billingForm.valid) {
      this.submitted = false;
    }
  }

  get l() {
    return this.billingForm.controls;
  }
}
