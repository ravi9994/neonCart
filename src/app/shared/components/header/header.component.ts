import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType: string;
  constructor(
    private menuController: MenuController,
    private router: Router,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() { }

  async toggleMenu(type) {
    this.menuType = type;
    this.menuController.toggle('end')
  }

  goTo(url) {
    this.router.navigate([url]);
  }

}
