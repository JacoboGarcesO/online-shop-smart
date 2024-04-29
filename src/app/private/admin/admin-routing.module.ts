import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminContainerComponent } from '../../containers/header-admin-container/header-admin-container.component';
import { LayoutAsideComponent } from '../../ui/layouts/layout-aside/layout-aside.component';
import { ManageFoodsContainerComponent } from '../../containers/manage-foods-container/manage-foods-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAsideComponent,
    children: [
      { path: '', component: HeaderAdminContainerComponent, outlet: 'header' },
      { path: '', component: ManageFoodsContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
