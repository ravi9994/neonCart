import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingPageRoutingModule } from './shopping-routing.module';

import { ShoppingPage } from './shopping.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShoppingPageRoutingModule,
    SharedModule
  ],
  declarations: [ShoppingPage]
})
export class ShoppingPageModule { }
