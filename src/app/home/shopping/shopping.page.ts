import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {

  activeTab: string = 'shopping-card';
  cartList: any;
  totalPayment: number = 0;

  constructor(
    private utilService: UtilService,
  ) { }

  ngOnInit() {
    this.cartList = this.utilService.cartList;
    this.utilService.detectChangeInCart.subscribe((res) => {
      this.checkTotalPayment();
    });
    this.checkTotalPayment();
  }

  checkTotalPayment() {
    this.totalPayment = 0;
    this.cartList.map((obj) => {
      this.totalPayment = this.totalPayment + (obj.qty * Number(obj.total));
    });
  }

  getTotal(index: number) {
    return this.cartList[index].qty * Number(this.cartList[index].total);
  }

  changeDecrement(i) {
    if (this.cartList[i].qty > 0) {
      this.cartList[i].qty = this.cartList[i].qty - 1;
    } else {
      this.cartList[i].qty = 0;
    }
    this.checkTotalPayment();
  }

  changeInputNumber(i) {
    if (this.cartList[i].qty < 0) {
      this.cartList[i].qty = 0;
    }
    this.checkTotalPayment();
  }

  changeIncrement(i) {
    this.cartList[i].qty = this.cartList[i].qty + 1;
    this.checkTotalPayment();
  }

  deleteFromCart(index: number) {
    this.utilService.deleteFromCart(index);
  }

}

