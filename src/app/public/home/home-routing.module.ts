import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from '../../ui/layouts/layout-home/layout-home.component';
import { HeaderContainerComponent } from '../../containers/header-container/header-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
