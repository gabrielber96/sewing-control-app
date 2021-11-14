import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionEmployePageRoutingModule } from './session-employe-routing.module';

import { SessionEmployePage } from './session-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionEmployePageRoutingModule
  ],
  declarations: [SessionEmployePage]
})
export class SessionEmployePageModule {}
