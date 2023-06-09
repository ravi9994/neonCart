import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.getScreenSize();
  }

  swiper: any;
  swiper1: any;
  swiperActiveIndex: number = 0;
  productList: any = [
    {
      image: './../../assets/images/man.jpg',
      title: 'T-shirts',
      product: '11 Products'
    },
    {
      image: './../../assets/images/powerback.png',
      title: 'Power back',
      product: '32 Products'
    },
    {
      image: './../../assets/images/cameras.png',
      title: 'Baby Shoes',
      product: '21 Products'
    },
    {
      image: './../../assets/images/shoose.png',
      title: 'Baby Shoes',
      product: '21 Products'
    },
    {
      image: './../../assets/images/alexa.png',
      title: 'Alex',
      product: '11 Products'
    },
    {
      image: './../../assets/images/bluetooth.png',
      title: 'Bluetooth',
      product: '32 Products'
    },
    {
      image: './../../assets/images/headphone.png',
      title: 'Headphone',
      product: '21 Products'
    },
    {
      image: './../../assets/images/remote.png',
      title: 'TV Remote',
      product: '11 Products'
    },
    {
      image: './../../assets/images/powerback.png',
      title: 'Power back',
      product: '32 Products'
    },
    {
      image: './../../assets/images/cameras.png',
      title: 'Baby Shoes',
      product: '21 Products'
    },
    {
      image: './../../assets/images/shoose.png',
      title: 'Baby Shoes',
      product: '21 Products'
    },
    {
      image: './../../assets/images/alexa.png',
      title: 'Alex',
      product: '11 Products'
    },
    {
      image: './../../assets/images/bluetooth.png',
      title: 'Bluetooth',
      product: '32 Products'
    },
    {
      image: './../../assets/images/headphone.png',
      title: 'Headphone',
      product: '21 Products'
    },
    {
      image: './../../assets/images/remote.png',
      title: 'TV Remote',
      product: '11 Products'
    },
    {
      image: './../../assets/images/powerback.png',
      title: 'Power back',
      product: '32 Products'
    },
    {
      image: './../../assets/images/cameras.png',
      title: 'Baby Shoes',
      product: '21 Products'
    },
    {
      image: './../../assets/images/shoose.png',
      title: 'Baby Shoes',
      product: '21 Products'
    },
    {
      image: './../../assets/images/alexa.png',
      title: 'Alex',
      product: '11 Products'
    },
    {
      image: './../../assets/images/bluetooth.png',
      title: 'Bluetooth',
      product: '32 Products'
    },
    {
      image: './../../assets/images/headphone.png',
      title: 'Headphone',
      product: '21 Products'
    },
  ];
  flashList: any = [
    {
      image: './../../assets/images/alexa.png',
    },
    {
      image: './../../assets/images/bluetooth.png',
    },
    {
      image: './../../assets/images/cameras.png',
    },
    {
      image: './../../assets/images/shoose.png',
    },
    {
      image: './../../assets/images/headphone.png',
    },
    {
      image: './../../assets/images/powerback.png',
    },
    {
      image: './../../assets/images/remote.png',
    },
    {
      image: './../../assets/images/cameras.png',
    },
    {
      image: './../../assets/images/shoose.png',
    },
    {
      image: './../../assets/images/headphone.png',
    },
    {
      image: './../../assets/images/powerback.png',
    },
    {
      image: './../../assets/images/remote.png',
    },
  ];
  BestproductList: any = [
    {
      image: './../../assets/images/bluetooth.png',
    },
    {
      image: './../../assets/images/alexa.png',
    },
    {
      image: './../../assets/images/minii-spicker.png',
    },
    {
      image: './../../assets/images/JBL-round.png',
    },
    {
      image: './../../assets/images/headphone.png',
    },
    {
      image: './../../assets/images/music-watch.png',
    },
  ];
  sellerList: any = [
    {
      image: './../../assets/images/cameras.png',
    },
    {
      image: './../../assets/images/shoose.png',
    },
    {
      image: './../../assets/images/alexa.png',
    },
    {
      image: './../../assets/images/headphone.png',
    },
    {
      image: './../../assets/images/music-watch.png',
    },
    {
      image: './../../assets/images/remote.png',
    },
    {
      image: './../../assets/images/powerback.png',
    },
    {
      image: './../../assets/images/shoose.png',
    },
    {
      image: './../../assets/images/cameras.png',
    },
  ]
  constructor(private platform: Platform,
    private router: Router) {
  }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      // Platform is ready, you can now access its properties
      this.getScreenSize();
    });
    const swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
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
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else if (width <= 990) {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 5,
        spaceBetween: 30,
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
