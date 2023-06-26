import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { UtilService } from 'src/app/shared/services/util.service';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { IonContent } from '@ionic/angular';

import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Thumbs]);

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  qty: number = 0;
  isFavorites: boolean = false;
  size = 'xl';
  color = 'brown';
  productList: any = [
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
  constructor(
    private router: Router,
    private platform: Platform,
    private utilService: UtilService,
    private photoViewer: PhotoViewer,
  ) { }

  ngOnInit() {
  }

  showImage(imageUrl) {
    this.photoViewer.show(imageUrl);
  }

  addRemoveFavorites() {
    this.isFavorites = !this.isFavorites;
    if (this.isFavorites) {
      UtilService.favoritesItems.push({
        image: './../../assets/images/sorts1.jpeg',
        title: 'Sorts',
        detail: 'Best sorts for mens and women both',
        price: 800,
        brands: 'Happywomen',
        color: 'Black',
        type: 'Sorts'
      });
    } else {
      let findIndex = UtilService.favoritesItems.findIndex((obj) => obj.title == 'Sorts');
      if (findIndex !== -1) {
        UtilService.favoritesItems.splice(findIndex, 1);
      }
    }
  }
  scrollToTop() {
    this.content.scrollToTop(400);
  }

  ionViewWillEnter(): void {
    this.scrollToTop();
    this.isFavorites = false;
    this.platform.ready().then(() => {
      this.getScreenSize();
    });
    let thumbSwiper = new Swiper(".thumbSwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbSwiper,
      },
    });
  }
  addToCart() {
    this.utilService.cartList.push({
      image: 'assets/images/man.jpg',
      name: 'Beautifully Design Dress',
      type: 'Clothes',
      qty: 2,
      price: '60.00',
      total: '120.00'
    });
    this.utilService.detectChangeInCart.next(true);
  }

  goTo(url) {
    this.router.navigate([url]);
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
          disableOnInteraction: true,
        },
      });
    } else if (width <= 990) {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
      });
    } else {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
      });
    }
  }

  changeDecrement() {
    if (this.qty > 0) {
      this.qty = this.qty - 1;
    } else {
      this.qty = 0;
    }
  }

  changeInputNumber() {
    if (this.qty < 0) {
      this.qty = 0;
    }
  }

  changeIncrement() {
    this.qty = this.qty + 1;
  }
}
