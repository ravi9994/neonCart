import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  ContactForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private platform: Platform,) {
    this.ContactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }


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

  onLogin() {
    this.submitted = true;
    if (this.ContactForm.valid) {
      this.submitted = false;
    }
  }

  get l() {
    return this.ContactForm.controls;
  }
}
