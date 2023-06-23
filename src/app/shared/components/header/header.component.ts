import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('popoverProfile') popover;
  @ViewChild('popoverPages') popoverPages;

  menuType: string = 'menu';
  searchQuery: string;
  isShow = false;
  isOpenProfilePopover: boolean = false;
  isOpenPagesPopover: boolean = false;
  cartItem;
  totalPayment: number = 0;
  UtilService = UtilService;
  searchBoxValue;

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

  async toggleMenu(type) {
    this.menuType = type;
    this.menuController.toggle('end')
  }

  logout() {
    if (this.isOpenProfilePopover || this.isOpenPagesPopover) {
      this.popoverControl.dismiss();
    }
    this.utilService.logout();
  }
  searchValue() {
    this.router.navigate([`home/search/${this.searchBoxValue}`]);
  }

  changeSearchValue(event) {
    this.searchBoxValue = event.target.value;
  }

  goTo(url) {
    this.isShow = false;
    if (this.isOpenProfilePopover || this.isOpenPagesPopover) {
      this.popoverControl.dismiss();
    }
    this.isOpenProfilePopover = false;
    this.isOpenPagesPopover = false;
    this.router.navigate([url]);
  }

  showModalPopover(e) {
    this.popover.event = e;
    this.isOpenProfilePopover = true;
  }

  showPagesPopover(e) {
    this.popoverPages.event = e;
    this.isOpenPagesPopover = true;
  }

  deleteFromCart(index: number) {
    this.utilService.deleteFromCart(index);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
