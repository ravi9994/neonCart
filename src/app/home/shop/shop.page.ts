import { Component, OnInit, HostListener } from '@angular/core';
import Swiper from 'swiper';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})

export class ShopPage implements OnInit {
  @HostListener('window:resize', ['$event'])

  onWindowResize(event: any) {
    this.getScreenSize();
  }
  swiper: any;
  moveEnd = 50;
  constructor(private platform: Platform, private router: Router) { }


  cameraList = [
    {
      image: './../../assets/images/alexa.png',
      title: 'Alexa',
    },
    {
      image: './../../assets/images/bluetooth.png',
      title: 'Bluetooth',
    },
    {
      image: './../../assets/images/headphone.png',
      title: 'Headphone',
    },
    {
      image: './../../assets/images/remote.png',
      title: 'TV Remote',
    },
  ]


  ProductList = [
    {
      image: './../../assets/images/cameras.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/shoose.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/alexa.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/headphone.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/music-watch.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/bluetooth.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/powerback.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/remote.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/cameras.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/alexa.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
    {
      image: './../../assets/images/headphone.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    }, {
      image: './../../assets/images/shoose.png',
      title: 'Speakers',
      detail: 'Wireless Audio System Multiroom 360',
      price: '$685.00'
    },
  ]

  changeRange(ev) {
    this.moveEnd = ev.target.value;

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.getScreenSize();
    });
    const swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
  getScreenSize() {
    const width = this.platform.width();
    const height = this.platform.height();
    if (width <= 480) {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

      });
    } else if (width <= 990) {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }


  goTo(url) {
    this.router.navigate([url]);
  }

}
