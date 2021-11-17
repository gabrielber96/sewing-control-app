import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionAdminPage } from './session-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SessionAdminPage
  },
  {
    path: 'register-employe',
    loadChildren: () => import('./register-employe/register-employe.module').then( m => m.RegisterEmployePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionAdminPageRoutingModule {}
