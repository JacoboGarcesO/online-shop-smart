import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then((module) => module.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module')
      .then((module) => module.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
