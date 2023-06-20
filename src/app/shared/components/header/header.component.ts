import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType: string;
  @ViewChild('searchBar') searchBar: IonSearchbar;
  searchQuery: string;

  // openSearchBar() {
  //   this.searchBar.value = '';
  //   this.searchBar.showCancelButton = true;
  //   this.searchBar.setFocus();
  // }

  // clearSearch() {
  //   this.searchQuery = '';
  //   this.searchBar.value = '';
  //   this.searchBar.hideCancelButton = true;
  // }

  constructor(
    private menuController: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async toggleMenu(type) {
    this.menuType = type;
    this.menuController.toggle('end')
  }

  goTo(url) {
    this.router.navigate([url]);
  }

}
