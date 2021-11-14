import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionAdminPage } from './session-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SessionAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionAdminPageRoutingModule {}
