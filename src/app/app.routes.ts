import { Routes } from '@angular/router';
// import { PrivateGuard } from './private/private.guard';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./private/private.module')
      .then((module) => module.PrivateModule),
    // canActivate: [PrivateGuard]
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module')
      .then((module) => module.PublicModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
