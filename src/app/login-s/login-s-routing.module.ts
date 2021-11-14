import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSPage } from './login-s.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSPageRoutingModule {}
