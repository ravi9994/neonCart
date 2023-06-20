import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      let map = new google.maps.Map(document.getElementById('map_canvas'), {
        mapTypeControl: false,
        streetViewControl: false,
        zoom: 10,
        center: { lat: 21.208348, lng: 72.846486 },
      });
    })
  }
}
