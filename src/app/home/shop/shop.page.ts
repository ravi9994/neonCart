import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { UtilService } from 'src/app/shared/services/util.service';
import * as _ from 'lodash';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
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
  addMoreNumber = 9;
  filterColors: any = [];
  priceRangeValue = 100;
  filterBrand: any = [];
  touchTypeValue;
  oldProductList;
  pageType = 'shop';
  globalSearchValue;
  constructor(
    private platform: Platform,
    private router: Router,
    private utilService: UtilService,
    private activeRoute: ActivatedRoute,
  ) {
    let value = this.activeRoute.snapshot.paramMap.get('value');
    if (value) {
      this.pageType = 'search';
      this.globalSearchValue = value;
    }
  }

  ionViewWillEnter() {
    let value = this.activeRoute.snapshot.paramMap.get('value');
    if (value) {
      this.pageType = 'search';
      this.globalSearchValue = value;
      this.touchTypeValue = value;
      setTimeout(() => {
        this.filterData();
      }, 50);
    }
  }

  changeSearchValue(event) {
    this.touchTypeValue = event.target.value;
    this.filterData();
  }


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
      title: 'Canon 500 D',
      detail: 'Super quality and features to this camera',
      price: 685,
      brands: 'Canon',
      color: 'Black',
      type: 'Camera'
    },
    {
      image: './../../assets/images/camera2.png',
      title: 'Canon 100D',
      detail: 'Super quality and features to this camera',
      price: 950,
      brands: 'Canon',
      color: 'Black',
      type: 'Camera'
    },
    {
      image: './../../assets/images/shirt1.jpeg',
      title: "Men's shirts",
      detail: 'Formal white shirt',
      price: 100,
      brands: 'PeterEngland',
      color: 'White',
      type: 'Shirt'
    },
    {
      image: './../../assets/images/sirt2.jpeg',
      title: "Men's shirts",
      detail: 'Formal Grey shirt',
      price: 200,
      brands: 'RICHLOOK',
      color: 'Grey',
      type: 'Shirt'
    },
    {
      image: './../../assets/images/raincoat1.png',
      title: 'BABA Raincoat',
      detail: 'Double Kapad Raincort 100% waterproof',
      price: 400,
      brands: 'BABA',
      color: 'Yellow',
      type: 'Raincoat'
    },
    {
      image: './../../assets/images/raincoat2.png',
      title: 'BABA Raincoat',
      detail: 'Double Kapad Raincort 100% waterproof',
      price: 500,
      brands: 'BABA',
      color: 'Blue',
      type: 'Raincoat'
    },
    {
      image: './../../assets/images/pent1.jpeg',
      title: "Men's pent",
      detail: 'Formal mens pent for best quality and kapad',
      price: 100,
      brands: 'RICHLOOK',
      color: 'Green',
      type: 'Pent'
    },
    {
      image: './../../assets/images/pent2.jpeg',
      title: "Men's pent",
      detail: 'Formal mens pent for best quality and kapad ',
      price: 150,
      brands: 'PeterEngland',
      color: 'Black',
      type: 'Pent'
    },
    {
      image: './../../assets/images/sorts1.jpeg',
      title: 'Sorts',
      detail: 'Best sorts for mens and women both',
      price: 800,
      brands: 'Happywomen',
      color: 'Black',
      type: 'Sorts'
    },
    {
      image: './../../assets/images/sorts2.jpeg',
      title: 'Sorts',
      detail: 'Best sorts for mens and women both',
      price: 700,
      brands: 'Happywomen',
      color: 'Blue',
      type: 'Sorts'
    },
    {
      image: './../../assets/images/light1.png',
      title: 'Night Lamp',
      detail: 'Night lamp for badroom and kitchen also.',
      price: 50,
      brands: 'Ujala',
      color: 'White',
      type: 'Light'
    },
    {
      image: './../../assets/images/light2.png',
      title: 'Night Lamp',
      detail: 'Night lamp for badroom and kitchen also.',
      price: 70,
      brands: 'Ujala',
      color: 'White',
      type: 'Light'
    },
  ]

  filterData() {
    let filterData;

    if (this.touchTypeValue) {
      filterData = this.oldProductList.filter((obj) => obj.type == this.touchTypeValue);
      this.touchTypeValue = false;
    }

    if (this.filterColors && this.filterColors.length > 0) {
      if (filterData) {
        filterData = filterData.filter((obj) => this.filterColors.includes(obj.color));
      } else {
        filterData = this.oldProductList.filter((obj) => this.filterColors.includes(obj.color));
      }
    }

    if (this.filterBrand && this.filterBrand.length > 0) {
      if (filterData) {
        filterData = filterData.filter((obj) => this.filterBrand.includes(obj.brands));
      } else {
        filterData = this.oldProductList.filter((obj) => this.filterBrand.includes(obj.brands));
      }
    }

    if (filterData) {
      filterData = filterData.filter((obj) => obj.price <= this.priceRangeValue * 10);
      this.ProductList = filterData;
    } else {
      filterData = this.oldProductList.filter((obj) => obj.price <= this.priceRangeValue * 10);
      this.ProductList = filterData;
    }
  }

  addMore() {
    if (this.addMoreNumber > 9) {
      this.addMoreNumber = 1;
    }
    for (let index = this.addMoreNumber; index < this.addMoreNumber + 4; index++) {
      this.ProductList.push(this.oldProductList[index - 1]);
    }
    this.addMoreNumber = this.addMoreNumber + 4;
  }

  addToCart() {
    this.utilService.cartList.push({
      image: 'assets/images/shop_image.png',
      name: 'Virtual Reality Headsets',
      type: 'Electronic',
      qty: 2,
      price: '200.00',
      total: '400.00'
    });
    this.utilService.detectChangeInCart.next(true);
  }

  ngOnInit() {
    this.oldProductList = _.cloneDeep(this.ProductList);
    this.platform.ready().then(() => {
      this.getScreenSize();
    });
    const swiper = new Swiper(".mySwiper", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    });
  }

  changeTouchValue(value) {
    this.touchTypeValue = value;
    this.filterData();
  }

  onChangeColors(event) {
    let value = event.target.value;
    if (event.target.checked) {
      this.filterColors.push(value);
    } else {
      let findIndex = this.filterColors.findIndex(obj => obj === value);
      this.filterColors.splice(findIndex, 1);
    };
    this.filterData();
  }

  onChangeBrands(event) {
    let value = event.target.value;
    if (event.target.checked) {
      this.filterBrand.push(value);
    } else {
      let findIndex = this.filterBrand.findIndex(obj => obj === value);
      this.filterBrand.splice(findIndex, 1);
    };
    this.filterData();
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


  goTo(url) {
    this.router.navigate([url]);
  }

}
