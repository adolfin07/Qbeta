// src/app/tab1/header-products/header-products.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderProductsComponent } from './header-products.component';

@NgModule({
  declarations: [HeaderProductsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderProductsComponent]
})
export class HeaderProductsModule {}
