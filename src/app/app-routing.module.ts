import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login-s/login-s.module').then((m) => m.LoginSPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'session-admin',
    loadChildren: () =>
      import('./page-sessions/session-admin/session-admin.module').then(
        (m) => m.SessionAdminPageModule
      ),
  },
  {
    path: 'session-employe',
    loadChildren: () =>
      import('./page-sessions/session-employe/session-employe.module').then(
        (m) => m.SessionEmployePageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
