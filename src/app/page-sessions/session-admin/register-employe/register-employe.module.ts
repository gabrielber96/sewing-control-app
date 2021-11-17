import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEmployePageRoutingModule } from './register-employe-routing.module';

import { RegisterEmployePage } from './register-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEmployePageRoutingModule
  ],
  declarations: [RegisterEmployePage]
})
export class RegisterEmployePageModule {}
