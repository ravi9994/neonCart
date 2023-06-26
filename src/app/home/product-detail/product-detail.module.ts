import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    ProductDetailPage,
  ],
  providers: [
    PhotoViewer,
  ]
})
export class ProductDetailPageModule { }
