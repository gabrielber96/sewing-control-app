import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginSPageRoutingModule } from './login-s-routing.module';

import { LoginSPage } from './login-s.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginSPageRoutingModule,
  ],
  declarations: [LoginSPage],
})
export class LoginSPageModule {}
