import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionAdminPageRoutingModule } from './session-admin-routing.module';

import { SessionAdminPage } from './session-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionAdminPageRoutingModule
  ],
  declarations: [SessionAdminPage]
})
export class SessionAdminPageModule {}
