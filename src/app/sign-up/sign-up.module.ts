import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { HeaderComponent } from './header/header.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    HeaderComponent,
    SignUpFormComponent,
  ],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
