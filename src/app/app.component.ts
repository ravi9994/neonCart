import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { UtilService } from './shared/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public static menuType: string = 'menu';
  cartItem;
  totalPayment: number = 0;
  isShow = false;
  isOpenProfilePopover: boolean = false;
  isOpenPagesPopover: boolean = false;
  UtilService = UtilService;


  constructor(
    private menuController: MenuController,
    private router: Router,
    private popoverControl: PopoverController,
    private utilService: UtilService,
  ) { }

  ngOnInit() {
    this.cartItem = this.utilService.cartList;
    this.utilService.detectChangeInCart.subscribe((res) => {
      this.checkTotalPayment();
    });
    this.checkTotalPayment();
  }

  checkTotalPayment() {
    this.totalPayment = 0;
    this.cartItem.map((obj) => {
      this.totalPayment = this.totalPayment + (obj.qty * Number(obj.total));
    });
  }

  getTotal(index: number) {
    return this.cartItem[index].qty * Number(this.cartItem[index].total);
  }

  deleteFromCart(index: number) {
    this.utilService.deleteFromCart(index);
  }


  goTo(url) {
    this.menuController.close();
    this.isShow = false;
    this.router.navigate([url]);
  }

  logout() {
    this.menuController.close();
    this.utilService.logout();
  }

}
