import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSPageRoutingModule } from './login-s-routing.module';

import { LoginSPage } from './login-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSPageRoutingModule
  ],
  declarations: [LoginSPage]
})
export class LoginSPageModule {}
