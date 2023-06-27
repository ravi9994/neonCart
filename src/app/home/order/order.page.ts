import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  productList: any = [
    {
      image: 'assets/images/cameras.png',
      title: 'Camera',
      product: 'Space Gray',
      price: '$500.00',
      qty: '2'
    },
    {
      image: 'assets/images/bluetooth.png',
      title: 'Bluetooth',
      product: 'Space Gray',
      price: '$549.00',
      qty: '1'
    },
    {
      image: 'assets/images/alexa.png',
      title: 'Alexa',
      product: 'Space Gray',
      price: '$549.00',
      qty: '3'
    },
  ];

  goTo(url) {
    this.router.navigate([url]);
  }
}
