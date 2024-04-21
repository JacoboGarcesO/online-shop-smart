import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideAdminContainerComponent } from '../../containers/aside-admin-container/aside-admin-container.component';
import { HeaderAdminContainerComponent } from '../../containers/header-admin-container/header-admin-container.component';
import { LayoutAsideComponent } from '../../ui/layouts/layout-aside/layout-aside.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAsideComponent,
    children: [
      { path: '', component: HeaderAdminContainerComponent, outlet: 'header' },
      { path: '', component: AsideAdminContainerComponent, outlet: 'aside' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
