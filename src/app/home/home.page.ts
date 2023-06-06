import { Component } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  swiper: any;
  swiperActiveIndex: number = 0;
  constructor() {
  }

  ngOnInit(): void {
    const swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }


}
