import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationContainerComponent } from '../../containers/authentication-container/authentication-container.component';
import { LayoutLoginComponent } from '../../ui/layouts/layout-login/layout-login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: '', component: AuthenticationContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
