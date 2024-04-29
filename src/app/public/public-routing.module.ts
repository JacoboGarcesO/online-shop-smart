import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard } from './public.guard';

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
  },
  {
    path: 'commerce',
    loadChildren: () => import('./commerce/commerce.module')
      .then((module) => module.CommerceModule),
    canActivate: [PublicGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
