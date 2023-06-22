import { Component, OnInit } from '@angular/core';
import * as e from 'express';
import * as _ from 'lodash';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  detailCard;
  oldOrderList;
  searchInputValue: string;
  orderStatus = 'All';
  productType = 'All';

  customCountryOptions: any = {
    header: 'Order Type',
  };

  customStatusOptions: any = {
    header: 'Status',
  };

  orderList: any = [
    {
      created: '10 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Cancelled',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Electronic'
    },
    {
      created: '14 Jul,2020',
      product: 'Watch',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Booked',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Fashion'
    },
    {
      created: '19 Jul,2020',
      product: 'Cloth',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'In Cart',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Clothes'
    },
    {
      created: '15 Jul,2020',
      product: 'HeadPhone',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Closed',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Electronic'
    },
    {
      created: '12 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Request',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Electronic'
    },
    {
      created: '14 Jul,2020',
      product: 'TV',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Booked',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Electronic'
    },
    {
      created: '15 Jul,2020',
      product: 'Bluetooth',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Request',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Electronic'
    },
    {
      created: '15 Jul,2020',
      product: 'Men Footwear',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Clothes'
    },
    {
      created: '15 Jul,2020',
      product: 'Kids',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Clothes'
    },
    {
      created: '15 Jul,2020',
      product: 'Mens Formal Shirts ',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Clothes'
    },
    {
      created: '15 Jul,2020',
      product: 'Laptop & accessories',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Electronic'
    },
    {
      created: '15 Jul,2020',
      product: 'Work space furniture',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00',
      type: 'Fashion'
    },
  ];
  constructor() {
    this.oldOrderList = _.cloneDeep(this.orderList);
  }

  ngOnInit() {
  }

  filterData() {
    let searchAbleValue;
    if (this.orderStatus && this.orderStatus !== 'All') {
      searchAbleValue = this.oldOrderList.filter((d) => d.status == this.orderStatus);
    }

    if (this.productType && this.productType !== 'All') {
      if (searchAbleValue) {
        searchAbleValue = searchAbleValue.filter((d) => d.type == this.productType);
      } else {
        searchAbleValue = this.oldOrderList.filter((d) => d.type == this.productType);
      }
    }

    if (this.searchInputValue) {
      const query = this.searchInputValue.toLowerCase();
      if (searchAbleValue) {
        searchAbleValue = searchAbleValue.filter((d) => d.product.toLowerCase().indexOf(query) > -1);
      } else {
        searchAbleValue = this.oldOrderList.filter((d) => d.product.toLowerCase().indexOf(query) > -1);
      }
    }

    if (searchAbleValue) {
      this.orderList = searchAbleValue;
    } else {
      this.orderList = this.oldOrderList;
    }
  }

}
