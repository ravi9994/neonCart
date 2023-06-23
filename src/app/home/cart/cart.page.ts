import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  UtilService = UtilService;

  constructor(
    private router: Router,
    private utilService: UtilService,
  ) { }

  ngOnInit() {
  }

  goTO(url) {
    this.router.navigate([url]);
  }

  deleteFromFavorites(index: number) {
    this.utilService.showConfirmationPopup(
      'Delete',
      'Are you sure you want to delete from favorites?',
      (cb) => {
        if (cb === 1) {
          this.UtilService.favoritesItems.splice(index, 1);
        }
      }
    );
  }
}
