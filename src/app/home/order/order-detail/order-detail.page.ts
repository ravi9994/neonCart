import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  detailCard;
  orderList: any = [
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Cancelled',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '14 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Booked',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '19 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'In Cart',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Closed',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '12 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Request',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '14 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Booked',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'Request',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
    {
      created: '15 Jul,2020',
      product: 'Camera',
      start_time: '08 Aug 2020',
      end_time: '12 Aug 2020',
      status: 'pending',
      delivery_status: 'cancelled',
      price: '$138.00'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
