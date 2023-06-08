import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType: string;
  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() { }

  async toggleMenu(type) {
    this.menuType = type;
    this.menuController.toggle('end')
  }

}
